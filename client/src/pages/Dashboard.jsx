// Dashboard.js
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import UploadButton from "../components/UploadButton";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/signup"); // Redirect to signup if no user is logged in
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <>
      {user ? (
        <main className="mx-auto max-w-7xl md:p-10">
          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
            <h1 className="mb-3 font-bold text-5xl text-gray-900">My Files</h1>
            <UploadButton />
            <p className="text-gray-900">
              {user.email ? user.email : "No email available"}
            </p>
          </div>
        </main>
      ) : (
        <p>Redirecting...</p>
      )}
    </>
  );
};

export default Dashboard;
