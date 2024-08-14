import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        // Send uid to the express server
        axios
          .post("https://quizbuddy-one.vercel.app/api/check-user", { uid })
          .then((response) => {
            if (response.data.exists) {
              console.log("User exists in the database");
              setIsLoading(false);
              navigate("/dashboard");
            } else {
              console.log("User does not exist in the database");
              setIsLoading(false);
              navigate("/signup");
            }
          })
          .catch((error) => {
            setIsLoading(false);
            alert("An error occurred. Please check the console");
            console.log(error);
          });
      } else {
        // Redirect to signup if no user is logged in
        setIsLoading(false);
        navigate("/signup");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div className="w-full mt-24 h-screen fle justify-center">
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-semibold text-xl ">Setting up your account</h3>
        <p>You will be redirected automatically......</p>
      </div>
    </div>
  );
};

export default AuthCallback;
// TODO: Create a loading spinner for the setting up of the account