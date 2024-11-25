import React, { useEffect, useRef, useState } from "react";
import { FaTrash, FaUpload, FaFile } from "react-icons/fa";
import Asterisk from "../../utils/Asterisk";
import { toast } from "react-toastify";
import { convertBytesToKB } from "../../../utils/utilFn";
import { useSoleCtx } from "../../../context/formContext/soleContext";

const FormFileThree = ({ label, name, required, small }) => {
  const { fillDocumentsInfo, clearDocumentFeild } = useSoleCtx();
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [fileSize, setFileSize] = useState(0);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const fileInputRef = useRef();

  const clearFileInput = (name) => {
    clearDocumentFeild(name);
    setSelectedFile(null);
    setProgress(0);
    setFileSize(0);
    setCount(0);
  };

  const showToastError = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleFileChange = (e) => {
    const selectedFile =
      e.target.files && e.target.files.length > 0 && e.target.files[0];

    if (selectedFile) {
      const allowedFileTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedFileTypes.includes(selectedFile.type)) {
        setError("Invalid file type. Please upload a PDF or DOCX file.");

        showToastError(
          "Invalid file type. Please upload a .pdf or .docx file."
        );
        return;
      }

      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB limit");
        showToastError("Document uploaded exceeds the required size of 5MB!");
        return;
      }

      setError("");
      setSelectedFile(selectedFile);
      setFileSize(Number(convertBytesToKB(selectedFile.size)).toFixed());
      fillDocumentsInfo(selectedFile, e);
      simulateProgress();
    }
  };

  const simulateProgress = () => {
    let currentProgress = 0;
    const totalSteps = 10;

    const interval = setInterval(() => {
      currentProgress += 10;
      setCount((prevCount) => prevCount + 10);
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
      }
    }, 2000 / totalSteps);
  };

  useEffect(() => {
    if (progress === 0) {
      setCount(0);
    }
  }, [progress]);

  const onChooseFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full py-2">
      <section className="document__container" onClick={onChooseFile}>
        {!selectedFile ? (
          <div
            className={`relative bg-gray-200/10 rounded-xl file__container border-2 border-sky-500  py-4 px-6 cursor-pointer flex flex-col space-y-6 shadow-md ${
              error
                ? "bg-red-600/10 border-solid border-red-600"
                : "border-dashed"
            }`}
          >
            {/* file name */}
            <p className="capitalize font-bold">
              {label}
              <span>{!required ? "" : <Asterisk required={required} />}</span>
            </p>
            {/* upload file contents */}
            <div className="flex items-center space-x-8">
              <div className="icon">
                <FaUpload className="h-10 w-10 text-red-600" />
              </div>
              <div className="flex flex-col">
                <h2 className="capitalize text-2xl font-bold">upload file</h2>
                {small && (
                  <p className="font-semibold text-sm text-red-600">
                    kindly upload all into a single pdf doc
                  </p>
                )}
                {error && (
                  <p className="mt-2 text-sm font-bold text-red-600">{error}</p>
                )}
              </div>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              name={name}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="relative bg-gray-200/10 rounded-xl file__container border-dashed border-2 border-sky-500  py-4 px-6 flex flex-col space-y-6 shadow-md">
            {/* file name */}
            <div className="flex items-center justify-between">
              <p className="capitalize font-bold">
                {label}
                <span>{!required ? "" : <Asterisk />}</span>
              </p>
              <div
                className="clear-icon cursor-pointer"
                onClick={() => clearFileInput(name)}
              >
                <FaTrash className="text-red-700 text-xl" />
              </div>
            </div>

            {/* upload file contents */}
            <div className="flex items-center space-x-8">
              <div className="icon">
                {count < 100 ? (
                  <FaUpload className="h-10 w-10 text-red-600" />
                ) : (
                  <FaFile className="h-14 w-14 text-blue-600 text-xl transition-all duration-500" />
                )}
              </div>
              <div className="flex flex-col py-4 w-full">
                <h2 className="capitalize text-sm  font-bold md:text-xl">
                  {selectedFile.name}
                </h2>
                <div className="flex justify-between py-2">
                  <span className="font-bold text-gray-600">{fileSize} kb</span>
                  <span className="font-bold text-gray-600">
                    {count && `${count}%`}
                  </span>
                </div>

                <div className="progress-container w-full h-[5px] bg-slate-300 rounded-full">
                  <div
                    className={`progress-bar rounded-lg transition-width duration-500 ease-in-out ${
                      count < 100 ? "bg-red-600" : "bg-blue-600"
                    }`}
                    style={{
                      width: `${progress}%`,
                      height: "100%",
                      borderRadius: "inherit",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default FormFileThree;
