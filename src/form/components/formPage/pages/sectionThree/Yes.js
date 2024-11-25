import React, { useEffect, useState } from "react";
import { useFormCtx } from "../../../../context/formContext/formContext";
import { questions } from "../../../../utils/ques";

const Yes = () => {
  const { fillQuestionnaires} = useFormCtx();

  const getInitialQuestionnaire = () => {
    const storedQuestionnaire = JSON.parse(
      localStorage.getItem("questionaire")
    );
    if (storedQuestionnaire) {
      return storedQuestionnaire;
    }

  
    return questions.map((questionObj, index) => ({
      id: questionObj.question,
      question: questionObj.question,
      answer: index >= 13 && index <= 15 ? "Yes" : null, 
      details: "",
      disabled: index >= 13 && index <= 15, 
    }));
  };

  const [questionnaire, setQuestionnaire] = useState(
    getInitialQuestionnaire()
  );

  const handleAnswerChange = (questionId, answer) => {
    const updatedQuestionnaire = questionnaire.map((q) =>
      q.id === questionId ? { ...q, answer, details: "" } : q
    );
    setQuestionnaire(updatedQuestionnaire);
   fillQuestionnaires(updatedQuestionnaire);
  };

  const handleDetailsChange = (questionId, details) => {
    const updatedQuestionnaire = questionnaire.map((q) =>
      q.id === questionId ? { ...q, details } : q
    );
    setQuestionnaire(updatedQuestionnaire);
   fillQuestionnaires(updatedQuestionnaire);
  };

  useEffect(() => {
    
    localStorage.setItem("questionaire", JSON.stringify(questionnaire));
  }, [questionnaire]);

  return (
    <section className="py-10 overflow-x-auto font-bold">
      <table className="w-full border">
        <thead>
          <tr>
            <th className="p-2 border">S/N</th>
            <th className="p-2 border">Questions</th>
            <th className="p-2 border">Yes/No</th>
            <th className="p-2 border">
              If 'Yes' please provide further details:
            </th>
          </tr>
        </thead>
        <tbody>
          {questionnaire.map((q, index) => (
            <tr key={index}>
              <td className="p-2 border text-center">{index + 1}</td>
              <td className="p-2 border text-center">
                <p className="max-w-sm">{q.question}</p>
              </td>
              <td className="p-2 border text-center">
                <label className="flex items-center justify-center">
                  <input
                    type="radio"
                    name={`answer-${q.id}`}
                    value="Yes"
                    className="cursor-pointer"
                    checked={q.answer === "Yes"}
                    onChange={() => handleAnswerChange(q.id, "Yes")}
                    required
                    disabled={q.disabled} 
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name={`answer-${q.id}`}
                    value="No"
                    checked={q.answer === "No"}
                    onChange={() => handleAnswerChange(q.id, "No")}
                    className="py-4 cursor-pointer"
                    required
                    disabled={q.disabled} 
                  />
                  No
                </label>
              </td>
              <td className="p-2 border text-center">
                {q.answer === "Yes" && (
                  <textarea
                    name="businessService"
                    value={q.details}
                    onChange={(e) => handleDetailsChange(q.id, e.target.value)}
                    className="border w-full p-4 outline-none bg-white"
                    cols="20"
                    rows="2"
                    required
                  ></textarea>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Yes;
