import React from "react";
import { usesingleLlcContext } from "../../context/customSllc";

const Ben = () => {
  const { beneficiaryDetails, loading } = usesingleLlcContext();

  return (
    <div className="my-10 shadow-md rounded-md p-4 bg-white">
      {loading ? (
        <p className="mt-4 text-center text-lg">Loading beneficiary data...</p>
      ) : beneficiaryDetails && beneficiaryDetails.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-left">
            <thead>
              <tr>
                <th className="p-3 bg-gray-800 text-white">S/N</th>
                <th className="p-3 bg-gray-800 text-white">Name</th>
                <th className="p-3 bg-gray-800 text-white">Nationality</th>
                <th className="p-3 bg-gray-800 text-white">Shareholding (%)</th>
              </tr>
            </thead>
            <tbody>
              {beneficiaryDetails.map((beneficiary, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{beneficiary.name}</td>
                  <td className="p-3 border">{beneficiary.nationality}</td>
                  <td className="p-3 border">{beneficiary.shareHolding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4 text-center text-lg">No beneficiary data available</p>
      )}
    </div>
  );
};

export default Ben;
