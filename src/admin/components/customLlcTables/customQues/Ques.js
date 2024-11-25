import React from "react";
import { usesingleLlcContext } from "../../../context/customSllc";

const Ques = () => {
  const { llcQuestionnaires, loading } = usesingleLlcContext();

  const renderTable = () => {
    return (
      <div className="overflow-x-auto py-10">
        <table className="w-full max-w-screen-xl mx-auto border border-collapse mt-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2 text-left">Question</th>
              <th className="border p-2 text-left">Answer</th>
              <th className="border p-2 text-left">If Yes Response</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(llcQuestionnaires) &&
              llcQuestionnaires?.map((questionnaire, index) => {
                return (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="border p-2">
                      {questionnaire.question || ""}
                    </td>
                    <td className="border p-2">{questionnaire.answer || ""}</td>
                    <td className="border p-2">
                      {questionnaire.details || ""}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {loading ? (
        <div className="mt-4 capitalize text-xl">
          Loading llcQuestionnaires...
        </div>
      ) : Array.isArray(llcQuestionnaires) && llcQuestionnaires.length > 0 ? (
        renderTable()
      ) : (
        <div className="mt-4">No questionnaires data available</div>
      )}
    </div>
  );
};

export default Ques;
