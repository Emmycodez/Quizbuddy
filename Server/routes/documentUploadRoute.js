import { Router } from "express";
import dotenv from "dotenv";
import { User, Chapter, File, Question } from "../database/models/User.js";
import authenticate from "../middlewares/authMiddleware.js";
import fetch from "node-fetch";
import upload from "../s3Upload.js";
import OpenAI from "openai";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { fetchQuizQuestions } from "../utils/fetchQuizQuestons.js";
import { processDocument } from "../utils/documentProcessor.js";
import { PassThrough } from 'stream';

dotenv.config();
const router = Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const checkRateLimits = (response) => {
  const limitRequests = response.headers.get('x-ratelimit-limit-requests');
  const remainingRequests = response.headers.get('x-ratelimit-remaining-requests');
  const resetRequests = response.headers.get('x-ratelimit-reset-requests');
  const limitTokens = response.headers.get('x-ratelimit-limit-tokens');
  const remainingTokens = response.headers.get('x-ratelimit-remaining-tokens');
  const resetTokens = response.headers.get('x-ratelimit-reset-tokens');

  console.log('Rate limits:', { limitRequests, remainingRequests, resetRequests, limitTokens, remainingTokens, resetTokens });
  
  // Example logic: If remaining requests are low, delay the next request
  if (remainingRequests <= 5) {
    console.warn('Approaching rate limit. Please wait before making further requests.');
    // Implement delay or retry logic here based on reset times
  }
};

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
});

router.get("/api/getUserFiles", authenticate, async (request, response) => {
  const userId = request.user.uid;
  try {
    // Fetch user files
    const userFiles = await File.find({ user: userId });
    if (!userFiles || userFiles.length === 0) {
      return response
        .status(404)
        .json({ error: "No files found for this user" });
    }
    response
      .status(200)
      .set("Content-Type", "application/json")
      .json(userFiles);
  } catch (error) {
    console.log("Error retrieving user files: ", error);
    return response
      .status(500)
      .json({ error: "Failed to retrieve user files" });
  }
});

router.post(
  "/api/file/upload",
  authenticate,
  upload.single('file'),
  async (request, response) => {
    console.log('User: ', request.user)
    console.log('User ID: ', request.user.uid);

    if(!request.user || !request.user.uid) {
      return response.status(401).json({ error: 'Unauthorized'});
    }

    const userId = request.user.uid;
    try {
      const fileUrl = request.file.location;
      const { originalname, mimetype, size } = request.file;
      const fetchResponse = await fetch(fileUrl);

      if (!fetchResponse.ok) {
        throw new Error(`Failed to fetch file: ${fetchResponse.statusText}`);
      }

      const newFile = new File({
        user: userId,
        fileName: originalname,
        filePath: fileUrl,
        fileType: mimetype,
        fileSize: size,
        uploadStatus: "PROCESSING",
      });

      await newFile.save();
      console.log("File saved to database: ", newFile);
      response.status(200).json({ newFile });
    } catch (error) {
      console.log("Error uploading files to database", error);
      response.status(500).json({ error: "Failed to upload user files" });
    }
  }
);


router.delete("/api/file/:id", authenticate, async (request, response) => {
  const { id } = request.params;
  const userId = request.user.uid;

  try {
    // Find the file in the database
    const file = await File.findOne({ _id: id, user: userId });

    if (!file) {
      return response.status(404).json({
        message: "File not found or you do not have permission to delete it",
      });
    }

    // Delete the file from S3
    const deleteParams = {
      Bucket: process.env.S3_BUCKET_NAME, // Ensure this is defined
      Key: file.fileName, // Ensure this matches the key used during upload
    };

    await s3.send(new DeleteObjectCommand(deleteParams));

    // Delete the file record from the database
    await File.findByIdAndDelete(id);

    return response.status(200).send({ message: "File deleted successfully" });
  } catch (error) {
    console.error("Failed to delete file", error);
    response.status(500).send({ message: error.message });
  }
});


router.get("/api/stream-quiz/:fileId", authenticate, async (request, response) => {
  const userId = request.user.uid;
  const { fileId } = request.params;

  try {
    const file = await File.findOne({
      user: userId,
      _id: fileId,
    });

    if (!file) {
      return response.status(404).json({ error: 'File not found' });
    }

    response.setHeader('Content-Type', 'application/json');

    const stream = new PassThrough();
    stream.pipe(response);

    await processDocument(
      file.filePath,
      (partialResult) => {
        stream.write(JSON.stringify({ partialResult }) + '\n');
      },
      (completeMessage) => {
        stream.write(JSON.stringify({ completeMessage }) + '\n');
        stream.end();
      }
    );

  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    response.status(500).send('Failed to fetch quiz questions');
  }
});
// router.get("/api/stream-quiz/:fileId", authenticate, async (request, response) => {
//   const userId = request.user.uid;
//   const { fileId } = request.params;

//   try {
//     const file = await File.findOne({
//       user: userId,
//       _id: fileId,
//     });

//     if (!file) {
//       return response.status(404).json({ error: 'File not found' });
//     }

//     // Fetch the file content from S3
//     const fileContent = await fetch(file.filePath).then(res => res.text());

//     // Use the processDocument function to get the quiz data
//     const quizData = await processDocument(fileContent);

//     response.status(200).json({ quiz: quizData });
//   } catch (error) {
//     if (error.response && error.response.status === 429) {
//       console.error("Rate limit exceeded, please try again later.");
//       response.status(429).send('Rate limit exceeded, please try again later.');
//     } else {
//       console.error('Error fetching quiz questions:', error);
//       response.status(500).send('Failed to fetch quiz questions');
//     }
//   }
// });

export default router;
