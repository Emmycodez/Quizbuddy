import { useParams, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import QuizLayout from "../components/QuizLayout";

const FileQuizPage = () => {
  // retrieving the file id using the params
  let { fileId } = useParams();
  const [user, setUser] = useState(null);
  const [quiz, setQuiz] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
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

  // make database call

  useEffect(() => {
    const fetchUserQuiz = async () => {
      if (user) {
        try {
          setIsLoading(true);
          const response = await axios.get(
            "http://localhost:5174/api/getUserQuiz",
            {
              headers: {
                Authorization: `Bearer ${await user.getIdToken()}`,
              },
            }
          );
          setQuiz(response.data);
          console.log(quiz);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      }
    };

    fetchUserQuiz();
  }, [fileId]);

  if (!quiz) NotFoundPage();

  return (
    <div className="flex flex-col text-[16px] h-[1285px] justify-between tracking-normal mt-[-25px] ">
      <QuizLayout />
    </div>
  );
};

export default FileQuizPage;
