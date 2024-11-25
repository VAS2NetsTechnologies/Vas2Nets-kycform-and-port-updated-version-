import { createContext, useContext } from "react";
import { indieInitialState } from "../../utils/individualUtils";
import { useReducer } from "react";
import { individualReducerFn } from "../../reducers/individual/individualFormData";
import { useEffect } from "react";

const indieCtx = createContext();

export const IndieCtxProvider = ({ children }) => {
  const storedIndieState =
    JSON.parse(localStorage.getItem("indieFormState")) || indieInitialState;
  const [state, dispatch] = useReducer(individualReducerFn, storedIndieState);

  const hasFileErrors = () => {
    return state.documents.some((document) =>
      Object.values(document).some((value) => !value)
    );
  };

  useEffect(() => {
    // Update local storage whenever the state changes
    localStorage.setItem("indieFormState", JSON.stringify(state));
  }, [state]);

  const fillPersonalInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: "POPULATE_PERSONAL_INFO", payload: { name, value } });
  };

  const fillSocials = (socials) => {
    const newSocials = [...socials];

    dispatch({
      type: "POPULATE_SOCIALS_INFO",
      payload: newSocials,
    });
  };

  const fillQuestionnairesInfo = (questionnaires) => {
    const newQuestionnaires = [...questionnaires];

    dispatch({
      type: "POPULATE_QUESTIONNAIRE_INFO",
      payload: newQuestionnaires,
    });
  };

  const fillDocumentsInfo = (file, e) => {
    const name = e.target.name;

    dispatch({ type: "POPULATE_DOCUMENTS_INFO", payload: { name, file } });
  };

  const clearDocumentFeild = (name) => {
    dispatch({ type: "CLEAR_DOCUMENTS_INFO", payload: { name } });
  };

  const indieResetState = () => {
    dispatch({ type: "RESET_STATE" });
  };

  const values = {
    ...state,
    state,
    fillPersonalInfo,
    fillSocials,
    fillQuestionnairesInfo,
    fillDocumentsInfo,
    clearDocumentFeild,
    hasFileErrors,
    indieResetState
  };

  return <indieCtx.Provider value={values}>{children}</indieCtx.Provider>;
};

export const useIndieCtx = () => useContext(indieCtx);
