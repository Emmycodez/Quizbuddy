import express from "express";
import connectDB from "./database/connectDB.js";
import { mongoDBURL } from "./config.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import documentUploadRoute from "./routes/documentUploadRoute.js";
import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "./uploadthing.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import admin from "firebase-admin";
import authenticate from "./middlewares/authMiddleware.js";


dotenv.config();

const app = express();
connectDB(mongoDBURL);

// middleware for parsing post requests to json
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 'https://quizbuddyai.vercel.app'

const corsOptions = {
  origin:'https://quizbuddyai.vercel.app'}

app.use(cors(corsOptions));





const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const customFetchFunction = () => {
  console.log("custom fetch function");
}

// const RouteHandlerConfig = {
//   callbackUrl: "https://your-callback-url.example.com", // Optional: Customize callback URL
//   uploadthingId: process.env.UPLOADTHING_APP_ID, // Optional: Provide UploadThing app id
//   uploadthingSecret: process.env.UPLOADTHING_SECRET, // Optional: Provide UploadThing API key
//   logLevel: "debug", //
//   isDev: true, // Optional: Enable dev mode
//   fetch: customFetchFunction
// };

// const port = process.env.PORT || 5100;
app.use(userRoutes);
app.use(documentUploadRoute);
// app.use(
//   "/api/uploadthing",
//   authenticate,
//   createRouteHandler({
//     router: uploadRouter,
//     config: RouteHandlerConfig,
//   })
// );

app.listen( () => {
  console.log(`server is running on`);
});
