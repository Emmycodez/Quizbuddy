import { useState, useEffect, useRef } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import UploadZone from "./UploadZone";
import { getAuth } from 'firebase/auth';

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [authToken, setAuthToken] = useState(null);
  const [ isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchAuthToken = async () => {
      const user = getAuth().currentUser;
      if(user) {
        const token = await user.getIdToken();
        setAuthToken(token);
      }
     setIsLoading(false);
    };

    fetchAuthToken();
  }, []);

  const handleFormClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  if(isLoading){
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <button
        className="inline-flex items-center justify-center bg-blue-600 text-lg font-semibold text-white shadow-sm transition-all duration-150 rounded-xl px-5 py-4 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        Upload PDF
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
          <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 flex flex-col items-center space-y-4 w-full max-w-[600px]">
            <div className="w-full max-w-[800px] p-4 border border-gray-300 rounded-lg shadow-md">
              <UploadZone authToken={authToken} />
            </div>
            <button className="mt-4 text-red-500" onClick={() => setIsOpen(!isOpen)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadButton;
