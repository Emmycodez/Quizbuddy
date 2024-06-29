import passport from "passport";
import { Strategy } from "passport-local"; 
import User from "../database/models/User.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});
