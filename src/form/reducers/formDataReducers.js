import { initialState } from "../utils/utilFn";

export const reducerFn = (state, action) => {
  if (action.type === "POPULATE_COPORATE_INFO") {
    const { name, value } = action.payload;

    return {
      ...state,
      coporateInfo: [{ ...state.coporateInfo[0], [name]: value }],
    };
  }

  if (action.type === "POPULATE_OWNERSHIP_INFO") {
    return {
      ...state,
      shareHolders: [...action.payload],
    };
  }

  if (action.type === "POPULATE_QUESTIONNAIRE_INFO") {
    return { ...state, questionnaires: [...action.payload] };
  }

 
  if (action.type === "POPULATE_DOCUMENTS_INFO") {
    const { name, file } = action.payload;
    // console.log(action.payload);
    return { ...state, documents: [{ ...state.documents[0], [name]: file }] };
  }

  if (action.type === "CLEAR_DOCUMENTS_INFO") {
    const { name } = action.payload;
    return { ...state, documents: [{ ...state.documents[0], [name]: "" }] };
  }

  if (action.type === "POPULATE_BOARDS_INFO") {
    return { ...state, boards: [...action.payload] };
  }

  if (action.type === "CHANGE_ISFINTECH_INFO") {
    return { ...state, isFintech: action.payload };
  }

  if (action.type === "RESET_STATE") {
    return initialState;
  }
  //   return { state };
  throw Error("Unknown action: " + action.type);
};
