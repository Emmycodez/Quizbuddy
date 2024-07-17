import { Router } from "express";
import {
  query,
  validationResult,
  checkSchema,
  matchedData,
} from "express-validator";
import dotenv from "dotenv";
import { createUserValidationSchema } from "../utils/validationSchema.js";
import { User, Chapter, File, Question } from "../database/models/User.js";
import authenticate from "../middlewares/authMiddleware.js";
import { v4 as uuidv4 } from "uuid";
import { createMockFileForUser } from "./createMockUserFile.js";

dotenv.config();
const router = Router();


router.post("/api/document/upload", (request, response) => {});

router.get("/api/getUserFiles", authenticate, async (request, response) => {
  const userId = request.user.uid;
  try {
    // Fetch user files
    const userFiles = await User.findOne({ uid: userId }).populate('files');
    response.status(200).set('Content-Type', 'application/json').json(userFiles.files);
    console.log(userFiles.files);
  } catch (error) {
    console.log("Error retrieving user files: ", error);
    return response
      .status(500)
      .json({ error: "Failed to retrieve user files" });
  }
});

router.delete("/api/file/:id", authenticate, async (request, response) => {
  try {
    const { id } = request.params;
    const userId = request.user.uid; // Get the user ID from the authenticated request

    // Find the file and check if it belongs to the authenticated user
    const file = await File.findOne({ _id: id, user: userId });

    if (!file) {
      return response
        .status(404)
        .json({
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

router.get('/api/getUserQuiz', )
export default router;
