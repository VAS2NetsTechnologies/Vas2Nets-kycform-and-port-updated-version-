import React, { useEffect, useState } from "react";
import { indieQuestionaires } from "../../utils/individualUtils";
import Asterisk from "../utils/Asterisk";
import { BsQuestionDiamondFill } from "react-icons/bs";
import Heading from "../utils/Heading";
import { useSoleCtx } from "../../context/formContext/soleContext";

const Questionnaires = () => {
  const { fillQuestionnairesInfo } = useSoleCtx();

  const getInitialQuestionnaire = () => {
    const storedQuestionnaire = JSON.parse(
      localStorage.getItem("solePropQuestionnaire")
    );
    if (storedQuestionnaire) {
      return storedQuestionnaire;
    }

    return indieQuestionaires.map((questionObj) => ({
      id: questionObj.question,
      question: questionObj.question,
      answer: null,
      details: "",
    }));
  };

  const [questionnaire, setQuestionnaire] = useState(getInitialQuestionnaire);

  const handleAnswerChange = (questionId, answer) => {
    const updatedQuestionnaire = questionnaire.map((q) =>
      q.id === questionId ? { ...q, answer, details: "" } : q
    );
    setQuestionnaire(updatedQuestionnaire);
    fillQuestionnairesInfo(updatedQuestionnaire);
  };

  const handleDetailsChange = (questionId, details) => {
    const updatedQuestionnaire = questionnaire.map((q) =>
      q.id === questionId ? { ...q, details } : q
    );
    setQuestionnaire(updatedQuestionnaire);
    fillQuestionnairesInfo(updatedQuestionnaire);
  };

  useEffect(() => {
    localStorage.setItem(
      "solePropQuestionnaire",
      JSON.stringify(questionnaire)
    );
  }, [questionnaire]);

  return (
    <section className="py-18 overflow-x-auto font-bold ">
      <div className="heading flex items-center space-x-2">
        <BsQuestionDiamondFill className="text-2xl text-red-600 font-bold" />
        <Heading text="QUESTIONAIRE" />
      </div>
      <table className="w-full p-8">
        <thead>
          <tr>
            <th className="p-2 border bg-gray-200">S/N</th>
            <th className="p-2 border bg-gray-200">
              PEP(Politically Exposed Person)
            </th>
            <th className="p-2 border bg-gray-200">Yes/No</th>
            <th className="p-2 border bg-gray-200">
              If 'Yes' please provide further details:
            </th>
          </tr>
        </thead>
        <tbody>
          {questionnaire.map((q, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="p-2 border text-center">
                {index + 1} <Asterisk />
              </td>
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
                    className="border w-full p-4 outline-none bg-white max-w-sm"
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

export default Questionnaires;
