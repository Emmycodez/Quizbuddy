import express from 'express';
import connectDB from './database/connectDB.js'
import { mongoDBURL } from './config.js';
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import "./strategies/localStrategy.js";
import userRoutes from "./routes/userRoutes.js"



const app = express();
connectDB(mongoDBURL);

// middleware for parsing post requests to json
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: "emmy codez",
  saveUninitialized: false,
  resave: false,
  cooke: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));

// TODO: Ask chatgpt for a good cookie max age for my sass

app.use(passport.initialize());
app.use(passport.session());

const port  = process.env.PORT || 5100;

app.use(userRoutes);



app.listen(port, () => {
  console.log(`server is running on ${port}`);
});