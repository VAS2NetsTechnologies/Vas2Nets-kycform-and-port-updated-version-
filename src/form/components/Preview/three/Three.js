import React from "react";
import { useFormCtx } from "../../../context/formContext/formContext";

const Three = () => {
  const { questionnaires } = useFormCtx();

  const renderTable = (questionnaires) => {
    return (
      <div className="overflow-x-auto py-10">
        <table className="w-full sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto border border-collapse mt-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Question</th>
              <th className="border p-2">Answer</th>
              <th className="border p-2">If Yes Response</th>
            </tr>
          </thead>
          <tbody>
            {questionnaires.map((questionnaire, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border p-2">{questionnaire.question}</td>
                <td className="border p-2">{questionnaire.answer}</td>
                <td className="border p-2">{questionnaire.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {questionnaires && questionnaires.length > 0 ? (
        renderTable(questionnaires)
      ) : (
        <div className="mt-4">No questionnaires data available</div>
      )}
    </div>
  );
};

export default Three;
