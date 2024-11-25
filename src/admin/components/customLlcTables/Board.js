import React from "react";
import { usesingleLlcContext } from "../../context/customSllc";
const Board = () => {
  const { boardMemberDetails, loading } = usesingleLlcContext();

  return (
    <div className="my-10 shadow-md rounded-md p-4 bg-white">
      {loading ? (
        <p className="mt-4 text-center text-lg">Loading board member data...</p>
      ) : boardMemberDetails && boardMemberDetails.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border text-left">
            <thead>
              <tr>
                <th className="p-3 bg-gray-800 text-white">S/N</th>
                <th className="p-3 bg-gray-800 text-white">Name</th>
                <th className="p-3 bg-gray-800 text-white">Position</th>
                <th className="p-3 bg-gray-800 text-white">Nationality</th>
                <th className="p-3 bg-gray-800 text-white">Residence</th>
              </tr>
            </thead>
            <tbody>
              {boardMemberDetails.map((member, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{member.name}</td>
                  <td className="p-3 border">{member.position}</td>
                  <td className="p-3 border">{member.nationality}</td>
                  <td className="p-3 border">{member.residence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-4 text-center text-lg">No board member data available</p>
      )}
    </div>
  );
};

export default Board;
