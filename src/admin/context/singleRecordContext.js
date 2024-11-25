import { createContext, useContext, useState } from "react";

const singleRecordContext = createContext({});

export const SingleRecordProvider = ({ children }) => {
  const [questionnaires, setQuestionnaires] = useState([]);
  const [signatories, setSignatories] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [declarator, setDeclarator] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(false);

  const values = {
    questionnaires,
    setQuestionnaires,
    signatories,
    setSignatories,
    directors,
    setDirectors,
    declarator,
    setDeclarator,
    documents,
    setDocuments,
    socials,
    setSocials,
    loading,
    setLoading,
  };

  return (
    <singleRecordContext.Provider value={values}>
      {children}
    </singleRecordContext.Provider>
  );
};

export const useSingleRecordContext = () => useContext(singleRecordContext);
