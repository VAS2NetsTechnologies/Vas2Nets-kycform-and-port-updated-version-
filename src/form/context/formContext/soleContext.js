import { createContext, useContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { soleInitialState } from "../../utils/solePropUtils";
import { soleReducerFn } from "../../reducers/sole-proprietorship/soleReducer";

const soleCtx = createContext();

export const SoleCtxProvider = ({ children }) => {
  const storedSoleState =
    JSON.parse(localStorage.getItem("soleFormState")) || soleInitialState;
  const [state, dispatch] = useReducer(soleReducerFn, storedSoleState);

  const hasFileErrors = () => {
    return state.documents.some((document) =>
      Object.values(document).some((value) => !value)
    );
  };

  useEffect(() => {
    // Update local storage whenever the state changes
    localStorage.setItem("soleFormState", JSON.stringify(state));
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

  const soleResetState = () => {
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
    soleResetState,
  };

  return <soleCtx.Provider value={values}>{children}</soleCtx.Provider>;
};

export const useSoleCtx = () => useContext(soleCtx);
