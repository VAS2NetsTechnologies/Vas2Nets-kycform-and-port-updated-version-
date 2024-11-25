import { createContext, useContext, useEffect, useReducer } from "react";
import { reducerFn } from "../../reducers/formDataReducers";
import { initialState } from "../../utils/utilFn";

const formCtx = createContext({});

export const FormCtxProvider = ({ children }) => {
  const storedState =
    JSON.parse(localStorage.getItem("formState")) || initialState;
  const [state, dispatch] = useReducer(reducerFn, storedState);

  const hasFileErrors = () => {
    return state.documents.some((document) =>
      Object.entries(document).some(
        ([key, value]) => key !== "otherRelevantLicenseDoc" && !value
      )
    );
  };

  useEffect(() => {
    // Update local storage whenever the state changes
    localStorage.setItem("formState", JSON.stringify(state));
  }, [state]);

  const fillCoporateInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: "POPULATE_COPORATE_INFO", payload: { name, value } });
  };

  const fillOwnershipInfo = (owners) => {
    const data = [...owners];

    dispatch({ type: "POPULATE_OWNERSHIP_INFO", payload: data });
  };

  const fillQuestionnaires = (questionnaires) => {
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

  const fillBoard = (boards) => {
    const newBoards = [...boards];

    dispatch({
      type: "POPULATE_BOARDS_INFO",
      payload: newBoards,
    });
  };

  const clearDocumentFeild = (name) => {
    dispatch({ type: "CLEAR_DOCUMENTS_INFO", payload: { name } });
  };

  const setIsFintech = (value) => {
    dispatch({ type: "CHANGE_ISFINTECH_INFO", payload: value });
  };

  const resetState = () => {
    dispatch({ type: "RESET_STATE" });
  };

  return (
    <formCtx.Provider
      value={{
        ...state,
        state,
        fillCoporateInfo,
        fillOwnershipInfo,
        fillQuestionnaires,
      
        fillDocumentsInfo,
        fillBoard,
        clearDocumentFeild,
        setIsFintech,
        resetState,
        hasFileErrors,
      }}
    >
      {children}
    </formCtx.Provider>
  );
};

export const useFormCtx = () => useContext(formCtx);
