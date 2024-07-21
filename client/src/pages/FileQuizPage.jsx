import { useParams, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import QuizLayout from "../components/QuizLayout";
import { BiLoaderCircle } from "react-icons/bi";

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
            `/api/stream-quiz/${fileId}`,
            {
              headers: {
                Authorization: `Bearer ${await user.getIdToken()}`,
                fileId,
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
      {isLoading ? (
        <div className="relative min-h-full bg-zinc-50 flex flex-col justify-between gap-2">
          <div className="flex-1 flex justify-center items-center flex-col mb-28">
            <div className="flex flex-col items-center gap-2">
              <BiLoaderCircle className="h-8 w-8 text-blue-500 animate-spin" />
              <h3 className="font-semibold text-xl">Loading...</h3>
              <p className="text-zinc-500 text-sm">
                We&apos;re preparing your QUIZ...
              </p>
            </div>
          </div>
        </div>
      ) : (
        <QuizLayout />
      )}
    </div>
  );
};


export default FileQuizPage;
