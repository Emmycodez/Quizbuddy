import { useState, useRef } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleFormClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <button
        className="inline-flex items-center justify-center bg-blue-600 text-lg font-semibold text-white shadow-sm transition-all duration-150 rounded-xl px-5 py-4 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        Upload PDF
      </button>
      {isOpen && (
        <div>
          <form
            action=""
            className="flex flex-col justify-center items-center border-2 border-dashed border-blue-600 p-4 h-[300px] w-[500px] cursor-pointer rounded-sm"
            onClick={handleFormClick}
          >
            <input
              type="file"
              accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .txt"
              ref={fileInputRef}
              className="hidden"
            />
          </form>
        </div>
      )}

      {/* display all user files */}
    </div>
  );
};

export default UploadButton;
