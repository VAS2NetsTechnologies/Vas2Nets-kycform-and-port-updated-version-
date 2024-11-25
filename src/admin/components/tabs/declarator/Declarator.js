import React from "react";
import { useSingleRecordContext } from "../../../context/singleRecordContext";

const Declarator = () => {
  const { declarator, loading } = useSingleRecordContext();

  
  return (
    <div className="my-10 shadow-md rounded-md">
      {loading ? (
        <p className="mt-4">Loading declarator data...</p>
      ) : declarator && declarator?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="p-3 bg-black text-white">S/N</th>
                <th className="p-3 bg-black text-white">Name</th>
                <th className="p-3 bg-black text-white">Position</th>
                <th className="p-3 bg-black text-white">Date_created</th>
              </tr>
            </thead>
            <tbody>
              {declarator?.map((dec, index) => (
                <tr key={index}>
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{dec?.name}</td>
                  <td className="p-3 border">{dec?.position}</td>
                  <td className="p-3 border">{dec?.date}</td>
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

export default Declarator;
