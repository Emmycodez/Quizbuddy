import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebaseconfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleButton from 'react-google-button';
import axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Add this line
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send user details to the server
      await axios.post("http://localhost:5174/api/create-user", {
        uid: user.uid,
        email: user.email,
        name: name,
        password: password
      });

      // Redirect to Auth Callback
      setIsLoading(false);
      navigate('/auth-callback');
    } catch (error) {
      console.log(error.response?.data || error.message);
      setError(error.message);
      setIsLoading(false);
    }
  }

  async function signInWithGoogle() {
    setIsLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;

      // Send user details to the server
      await axios.post("http://localhost:5174/api/create-user", {
        uid: user.uid,
        email: user.email,
        name: user.displayName || "Default Name",
        password: "12345"
      });

      // Redirect to Auth Callback
      setIsLoading(false);
      navigate('/auth-callback');
    } catch (error) {
      console.log(error.response?.data || error.message);
      setError(error.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center py-4 px-6 bg-gray-100 h-screen">
      <div className="bg-white flex flex-col py-4 justify-center pb-6 px-8 w-[400px] max-w-[600px]">
        <h2 className="text-center text-4xl font-bold mb-4 mt-8 text-blue-600">
          Sign Up
        </h2>
        {error && (
          <div className="bg-red-400 py-2 px-4 rounded-sm">{error}</div>
        )}
        <form
          className="max-w-[600px] w-full mx-auto bg-white p-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col py-2">
            <label className="text-gray-500">Name</label>
            <input
              className="border p-2"
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-gray-500">Email</label>
            <input
              className="border p-2"
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2 relative">
            <label className="text-gray-500">Password</label>
            <input
              className="border p-2"
              type={showPassword ? "text" : "password"} // Change this line
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button className="border w-full my-5 py-2 bg-blue-600 hover:bg-blue-500 text-white">
            {isLoading ? 'Signing Up....' : 'Sign Up'}
          </button>
          <div className="flex flex-row items-center justify-between">
            <hr className="border border-gray-300 w-full"/> <p className="mx-2">or</p> <hr className="border border-gray-300 w-full"/>
          </div>
          <div className="flex justify-center items-center bg-white rounded-lg my-4">
            <GoogleButton onClick={signInWithGoogle}/>
          </div>
        </form>
        <div className="w-100 text-center">
          Already have an account? <span className="underline">Log In</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
