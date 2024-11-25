import React from "react";
import { baseURL } from "../../util/http";

const DownloadButton = ({ doc }) => {
  const downloadURL = `${baseURL}/${doc.file_path}`;
console.log(downloadURL);

  return (
    <button className="bg-red-500 rounded-xl">
      <a
        href={`${downloadURL}`}
        download
        target="_blank"
        rel="noreferrer"
        className="text-white py-10 text-xl px-6 tracking-wider shadow-sm rounded-md"
      >
        Download
      </a>
    </button>
  );
};

export default DownloadButton;
