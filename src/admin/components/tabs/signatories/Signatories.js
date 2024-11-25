import React from "react";
import { useSingleRecordContext } from "../../../context/singleRecordContext";

const Signatories = () => {
  const { signatories, loading } = useSingleRecordContext();

  return (
    <div className="my-10 shadow-md rounded-md">
      {loading ? (
        <p className="mt-4">Loading...</p>
      ) : signatories && signatories?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="p-3 bg-black text-white">S/N</th>
                <th className="p-3 bg-black text-white">Signatory</th>
                <th className="p-3 bg-black text-white">Position</th>
              </tr>
            </thead>
            <tbody>
              {signatories?.map((signatory, index) => (
                <tr key={index}>
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{signatory?.name}</td>
                  <td className="p-3 border">{signatory?.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4">No director data available</p>
      )}
    </div>
  );
};

export default Signatories;
