import React from "react";
import DownloadButton from "./DownloadButton";

const Docs = ({ doc }) => {

  return (
    <tr key={doc.id}>
      <td>
        <span>{doc.name || doc.file_name}</span>
      </td>
      <td className="border py-2 px-4">
        <DownloadButton doc={doc} />
      </td>
    </tr>
  );
};

export default Docs;
