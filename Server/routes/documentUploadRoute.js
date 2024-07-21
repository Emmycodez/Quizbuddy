import { Router } from "express";
import dotenv from "dotenv";
import { User, Chapter, File, Question } from "../database/models/User.js";
import authenticate from "../middlewares/authMiddleware.js";
import fetch from "node-fetch";
import upload from "../s3Upload.js";
import OpenAI from "openai";


dotenv.config();
const router = Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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
    // console.log(userFiles.files);
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
  upload.single("file"),
  async (request, response) => {
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
  try {
    const fileId = request.params.fileId;
    const userId = request.user.uid; // Get the user ID from the authenticated request

    // Find the file and check if it belongs to the authenticated user
    const file = await File.findOne({ _id: id, user: userId });

    if (!file) {
      return response.status(404).json({
        message: "File not found or you do not have permission to delete it",
      });
    }

    // Delete the file
    await File.findByIdAndDelete(id);

    return response.status(200).send({ message: "File deleted successfully" });
  } catch (error) {
    console.error("Failed to delete file", error);
    response.status(500).send({ message: error.message });
  }
});

router.get("/api/stream-quiz/:fileId", async (request, response) => {
  const userId = req.user.uid;
  const { fileId } = req.params;

  try {
    const file = await File.findOne({
      user: userId,
      _id: fileId,
    });

    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Fetch quiz questions from OpenAI
    const openAiResponse = await fetch('openai_endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openAiApiKey}`
      },
      body: JSON.stringify({ fileUrl: file.filePath })
    });

    if (!openAiResponse.ok) {
      throw new Error('Failed to fetch quiz questions');
    }

    const reader = openAiResponse.body.getReader();
    const decoder = new TextDecoder();
    let batch = '';

    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Transfer-Encoding': 'chunked'
    });

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      batch += decoder.decode(value, { stream: true });

      if (batch.endsWith('\n')) {
        res.write(batch);
        batch = '';
      }
    }

    res.end();
  } catch (error) {
    console.error('Error streaming quiz questions:', error);
    res.status(500).send('Failed to stream quiz questions');
  }
});
    

export default router;

//     const fileContent = await fetchResponse.text();

//     let completion;
//     try {
//       completion = await openai.chat.completions.create({
//         messages: [
//           {
//             role: "system",
//             content: `Create a quiz from the following document content:\n\n${fileContent}`,
//           },
//         ],
//         model: "gpt-3.5-turbo",
//       });
//     } catch (error) {
//       if (error.status === 429) {
//         console.error("Rate limit exceeded:", error);
//         return response
//           .status(429)
//           .json({ error: "Rate limit exceeded. Please try again later." });
//       }
//       throw error;
//     }

//     const quizData = completion.choices[0].message.content;
//     res.json({ quiz: quizData });
//   } catch (error) {
//     console.error("Error processing file:", error);
//     res.status(500).json({ error: "Failed to process file" });
//   }
// }
