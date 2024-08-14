import { useParams, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import QuizLayout from "../components/QuizLayout";
import { BiLoaderCircle } from "react-icons/bi";

const FileQuizPage = () => {
  let { fileId } = useParams();
  const [user, setUser] = useState(null);
  const [quiz, setQuiz] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/signup");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  useEffect(() => {
    const fetchUserQuiz = async () => {
      if (user) {
        try {
          setIsLoading(true);

          const token = await user.getIdToken();
          const response = await axios.get(`https://quizbuddy-one.vercel.app/api/stream-quiz/${fileId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'text/event-stream', // Ensure server sends data in a stream
            },
            responseType: 'stream', // Expect a stream response
          });

          const reader = response.data.getReader();
          const decoder = new TextDecoder();
          let quizData = '';

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            quizData += decoder.decode(value, { stream: true });
            setQuiz(JSON.parse(quizData));
          }
          
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      }
    };

    fetchUserQuiz();
  }, [fileId, user]);

  if (isLoading) {
    return (
      <div className="flex flex-col text-[16px] h-[1285px] justify-between tracking-normal mt-[-25px] ">
        <div className="relative min-h-full bg-zinc-50 flex divide-y divide-zinc-300 flex-col justify-between gap-2">
          <div className="flex-1 flex justify-center items-center flex-col mb-28">
            <div className="flex flex-col items-center gap-2">
              <BiLoaderCircle className="h-8 w-8 text-blue-500 animate-spin" />
              <h3 className="font-semibold text-xl">Loading......</h3>
              <p className="text-zinc-500 text-sm">We&apos;re preparing your QUIZ..</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!quiz.length) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex flex-col text-[16px] h-[1285px] justify-between tracking-normal mt-[-25px] ">
      <QuizLayout quiz={quiz} />
    </div>
  );
};

export default FileQuizPage;
