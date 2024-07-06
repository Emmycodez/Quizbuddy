import { Router } from 'express';
import { query, validationResult, checkSchema, matchedData } from "express-validator";
import { createUserValidationSchema } from '../utils/validationSchema.js';
import { User, Chapter, File, Question}  from '../database/models/User.js';



const router = Router();

router.post("/api/users", checkSchema(createUserValidationSchema), async (request, response) => {
  const result = validationResult(request);
  if(!result.isEmpty()) return response.send(result.array());

  const data = matchedData(request);
  console.log(data);
  try {
    const savedUser = await User.create(data);
    return response.status(201).send(savedUser);
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
});

router.post("/api/document/upload", (request, response) => {

});

router.get("/api/getUserFiles", async (request, response) => {});

export default router;