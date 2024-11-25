import { soleInitialState } from "../../utils/solePropUtils";

export const soleReducerFn = (state, action) => {
  if (action.type === "POPULATE_PERSONAL_INFO") {
    const { name, value } = action.payload;

    return {
      ...state,
      businessInfo: [{ ...state.businessInfo[0], [name]: value }],
    };
  }

  if (action.type === "POPULATE_SOCIALS_INFO") {
    return { ...state, socials: [...action.payload] };
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

  if (action.type === "RESET_STATE") {
    return soleInitialState;
  }
  //   return { state };
  throw Error("Unknown action: " + action.type);
};
