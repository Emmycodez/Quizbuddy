import { Router } from "express";
import { checkSchema, validationResult, matchedData } from "express-validator";
import { User } from "../database/models/User.js";
import { createUserValidationSchema } from "../utils/validationSchema.js";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const router = Router();


// Initialize Firebase Admin SDK

router.post(
  "/api/users",
  checkSchema(createUserValidationSchema),
  async (request, response) => {
    const result = validationResult(request);
    if (!result.isEmpty()) return response.send(result.array());

    const data = matchedData(request);
    console.log(data);
    try {
      const savedUser = await User.create(data);
      return response.status(201).send(savedUser);
    } catch (error) {
      console.log(error);
      return response.sendStatus(400);
    }
  }
);

router.post('/api/check-user', async (request, response) => {
    const {  uid } = request.body;
    try {

      const user = await User.findOne({ uid });
      if (user) {
        response.json({ exists: true });
      } else {
        response.json({ exists: false });
      }
    } catch (error) {
      console.error('Error checking user: ', error);
      response.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/api/create-user', async (request, response) => {
  const { uid, name, email, password } = request.body;

  // Check if all required fields are present
  if (!uid || !name || !email || !password) {
    return response.status(400).json({ error: 'Missing required fields' });
  }

  // Create a data object for user creation
  const userData = {
    uid: uid,
    name: name,
    email: email,
    password: password
  };

  try {
    // Use your User model (e.g., Mongoose or Sequelize) to create the user
    const savedUser = await User.create(userData);

    // Respond with the created user data and a 201 status code
    return response.status(201).json(savedUser);
  } catch (error) {
    // Handle errors during user creation
    console.error('Error creating user:', error);
    return response.status(400).json({ error: 'Failed to create user' });
  }
});

export default router;
