import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import UploadButton from "../components/UploadButton";
import axios from "axios";
import { LuGhost } from "react-icons/lu";
import Spinner from "../components/Spinner";
import { FaPlus } from "react-icons/fa";
import { format } from "date-fns";
import { FaRegTrashCan } from "react-icons/fa6";
import { LuLoader2 } from "react-icons/lu";

const Dashboard = () => {
  const [currentlyDeletingFile, setCurrentlyDeletingFile] = useState(null); // Track the file being deleted
  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    const fetchUserFiles = async () => {
      if (user) {
        try {
          setIsLoading(true);
          const response = await axios.get(
            "http://locahost:5174/api/getUserFiles",
            {
              headers: {
                Authorization: `Bearer ${await user.getIdToken()}`,
              },
            }
          );
          setFiles(response.data);
          const id = files._id
          console.log(files);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching files", error);
          setIsLoading(false);
        }
      }
    };

    fetchUserFiles();
  }, [user]);

  const handleDeleteBook = async (id) => {
    setCurrentlyDeletingFile(id);
    try {
      await axios.delete(`https://quizbuddy-one.vercel.app/api/file/${id}`, {
        headers: {
          Authorization: `Bearer ${await user.getIdToken()}`,
        },
      });
      // Remove the deleted file from the state
      setFiles(files.filter((file) => file._id !== id));
      setCurrentlyDeletingFile(null);
    } catch (error) {
      setCurrentlyDeletingFile(null);
      console.error(error);
    }
  };

  return (
    <>
      {user ? (
        <main className="mx-auto max-w-7xl md:p-10">
          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center  sm:gap-0">
            <h1 className="mb-3 font-bold text-5xl text-gray-900">My Files</h1>
            <UploadButton user={user} />
            {/* <p className="text-gray-900">
              {user.email ? user.email : "No email available"}
            </p> */}
          </div>
          {/* Display all user files */}
          {files && files?.length !== 0 ? (
            <div>
              <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
                {files
                  .sort(
                    (a, b) =>
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime()
                  )
                  .map((file) => (
                    <li
                      key={file._id} // Use _id if your MongoDB schema uses this field
                      className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg"
                    >
                      <Link
                        to={`/dashboard/${file._id}`}
                        className="flex flex-col gap-2"
                      >
                        <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                        </div>
                        <div className="flex-1 truncate">
                          <div className="flex items-center space-x-3">
                            <h3 className="truncate text-lg font-medium text-zinc-900">
                              {file.fileName}
                            </h3>
                          </div>
                        </div>
                      </Link>

                      <div className="px-6 mt-4 grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500">
                        <div className="flex items-center gap-2">
                          <FaPlus className="h-4 w-4" />
                          {format(new Date(file.createdAt), "MMM yyyy")}
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteBook(file._id)} // Pass the file id here
                        size="sm"
                        className="w-full bg-red-300"
                      >
                        {currentlyDeletingFile === file._id ? (
                          <LuLoader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <FaRegTrashCan className="h-4 w-4" />
                        )}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ) : isLoading ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center gap-2">
              <LuGhost className="h-8 w-8 text-zinc-800" />
              <h3 className="font-semibold text-xl">
                Pretty empty around here
              </h3>
              <p>Let's upload your first PDF.</p>
            </div>
          )}
        </main>
      ) : (
        <p className="h-screen width-full flex justify-center">
          Redirecting...
        </p>
      )}
    </>
  );
};

export default Dashboard;
