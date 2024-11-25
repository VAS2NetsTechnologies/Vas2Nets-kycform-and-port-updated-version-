import React from "react";
import { useSingleRecordContext } from "../../../context/singleRecordContext";

const Directors = () => {
  const { directors } = useSingleRecordContext();

  return (
    <div className="my-10 shadow-md rounded-md">
      {directors && directors?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="p-3 bg-black text-white">S/N</th>
                <th className="p-3 bg-black text-white">Director Name</th>
                <th className="p-3 bg-black text-white">Ownership Rate</th>
              </tr>
            </thead>
            <tbody>
              {directors.map((director, index) => (
                <tr key={index}>
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{director.directorName}</td>
                  <td className="p-3 border">{director.ownershipRate}</td>
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

export default Directors;
