import { createContext, useContext, useState } from "react";

const singleLlcContext = createContext({});

export const SingleLlcRecordProvider = ({ children }) => {
  const [llcQuestionnaires, setLlcQuestionnaires] = useState([]);
  const [boardMemberDetails, setBoardMemberDetails] = useState([]);
  const [beneficiaryDetails, setBeneficiaries] = useState([]);
  const [signatories, setSignatories] = useState([]);
  const [loading, setLoading] = useState(false);

  const setQuestionnaires = (ques) => {
    setLlcQuestionnaires(ques);
  };

  const modifyQues = (ques) => {
    const formattedQues = Object.values(ques).map((q) => ({
      question: q.question,
      answer: q.answer,
      details: q.details || "",
    }));
    setLlcQuestionnaires(formattedQues);
  };

  const modifySig = (sig) => {
    setSignatories(sig);
  };

  const values = {
    llcQuestionnaires,
    setQuestionnaires,
    modifyQues,
    loading,
    setLoading,
    setBeneficiaries,
    beneficiaryDetails,
    boardMemberDetails,
    setBoardMemberDetails,
    signatories,
    setSignatories,
    modifySig,
  };

  return (
    <singleLlcContext.Provider value={values}>
      {children}
    </singleLlcContext.Provider>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export const usesingleLlcContext = () => useContext(singleLlcContext);
