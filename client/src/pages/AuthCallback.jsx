import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios"; 


const AuthCallback = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Check if the user exists in the database
          const response = await axios.post('/api/check-user', { uid: user.uid });

          if (response.data.exists) {
            // User exists, sync user data
            // You can add any user sync logic here
          } else {
            // User does not exist, create a new user
            await axios.post('/api/create-user', {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
            });
          }

          // Redirect to the dashboard
          navigate('/dashboard');
        } catch (error) {
          console.error("Error checking/creating user:", error);
          // Handle error accordingly
        }
      } else {
        // Redirect to signup if no user is logged in
        navigate('/signup');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth, navigate]);

  return <p>Processing...</p>;
};

export default AuthCallback;
