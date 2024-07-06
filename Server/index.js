import express from 'express';
import connectDB from './database/connectDB.js'
import { mongoDBURL } from './config.js';
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"
import documentUploadRoute from "./routes/documentUploadRoute.js"



const app = express();
connectDB(mongoDBURL);

// middleware for parsing post requests to json
app.use(express.json());
app.use(express.urlencoded({ extended:true }))
app.use(cookieParser());


const port  = process.env.PORT || 5100;

app.use(userRoutes);
app.use(documentUploadRoute);



app.listen(port, () => {
  console.log(`server is running on ${port}`);
});