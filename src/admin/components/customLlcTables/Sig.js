import React from "react";
import { usesingleLlcContext } from "../../context/customSllc";

const Sig = () => {
  const { signatories, loading } = usesingleLlcContext();

  return (
    <div className="my-10 shadow-md rounded-md">
      {loading ? (
        <p className="mt-4 text-center text-lg">Loading signatories data...</p>
      ) : signatories && signatories.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-left">
            <thead>
              <tr>
                <th className="p-3 bg-gray-800 text-white">S/N</th>
                <th className="p-3 bg-gray-800 text-white">Name</th>
                <th className="p-3 bg-gray-800 text-white">Designation</th>
              </tr>
            </thead>
            <tbody>
              {signatories.map((signatory, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{signatory.name}</td>
                  <td className="p-3 border">{signatory.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4 text-center text-lg">No signatories data available</p>
      )}
    </div>
  );
};

export default Sig;
