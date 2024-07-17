import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropZone from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import ProgressBar from "./ProgressBar";


const UploadZone = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();
  

  const startSimulatedProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);

    return interval;
  };

  return (
    <DropZone
      multiple={false}
      onDrop={(acceptedFiles) => {
        setIsUploading(true);

        const progressInterval = startSimulatedProgress();

        // Simulate file upload
        setTimeout(() => {
          clearInterval(progressInterval);
          setUploadProgress(100);
          setIsUploading(false);

          // Navigate or do something else after upload
          // navigate("/some/path");
        }, 5000); // Simulate a 5-second upload
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 border-dashed border-gray-300 rounded-lg"
        >
          <input {...getInputProps()} />
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FaCloudUploadAlt className="h-6 w-6 text-zinc-500 mb-2" />
                <p className="mb-2 text-sm text-zinc-700">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-zinc-500">
                  PDF, DOC, DOCX etc.... (up to 4MB)
                </p>
              </div>

              {acceptedFiles && acceptedFiles[0] ? (
                <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200">
                  <div className="px-3 py-2 h-full grid place-items-center">
                    <CiFileOn className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="px-3 py-2 h-full text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}

              {isUploading && (
                <div className="w-full mt-4 max-w-xs mx-auto">
                  <ProgressBar
                    max={100}
                    value={uploadProgress}
                    className="h-1 w-full"
                  />
                </div>
              )}
            </label>
          </div>
        </div>
      )}
    </DropZone>
  );
};

export default UploadZone;