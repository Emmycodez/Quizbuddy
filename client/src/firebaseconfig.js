import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzivMupSXEm3SUm63Z4KhHdL3gQUW2bzM",
  authDomain: "quizbuddy-d77a2.firebaseapp.com",
  projectId: "quizbuddy-d77a2",
  storageBucket: "quizbuddy-d77a2.appspot.com",
  messagingSenderId: "911192408772",
  appId: "1:911192408772:web:99a23456f70cf24339bf91",
  measurementId: "G-VG00CJZL7B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); 
export const googleProvider = new GoogleAuthProvider();



