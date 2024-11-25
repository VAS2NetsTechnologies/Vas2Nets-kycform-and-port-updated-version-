import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  // eslint-disable-next-line
  const [uploadStatus, setUploadStatus] = useState("select");
  const inputRef = useRef();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      // Simulate progress when file is selected
      simulateProgress();
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
  };

  const simulateProgress = () => {
    setUploadStatus("uploading");

    // Simulate progress updates
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        setUploadStatus("success");
      }
    }, 500);
  };

  return (
    <div className="py-40">
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {!selectedFile && (
        <button
          className="file-btn flex justify-center items-center mx-auto"
          onClick={onChooseFile}
        >
          <span className="material-symbols-outlined">
            <FaCloudUploadAlt />
          </span>{" "}
          Upload file <span></span>
        </button>
      )}
      {selectedFile && (
        <>
          <div className="file-card">
            <span>Description</span>

            <div className="file-info">
              <h6>{selectedFile.name}</h6>
              <div className="progress-bg">
                <div
                  className="progress"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <button onClick={clearFileInput}>
              <span>Close</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUpload;
