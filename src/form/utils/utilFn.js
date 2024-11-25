export const clearLocalStorage = () => {
  localStorage.removeItem("formState");
  localStorage.removeItem("socials");
  localStorage.removeItem("owners");
  localStorage.removeItem("questionnaireYes");
  localStorage.removeItem("questionnaireNo");
  localStorage.removeItem("questionnaire");
  localStorage.removeItem("questionaire");
  localStorage.removeItem("indieQuestionnaire");
  localStorage.removeItem("indieFormState");
  localStorage.removeItem("indieSocials");
  localStorage.removeItem("solePropQuestionnaire");
  localStorage.removeItem("soleFormState");
  localStorage.removeItem("solePropSocials");
};

export const initialState = {
  coporateInfo: [
    {
      legalName: "",
      tradeName: "",
      typeOfInc: "",
      countryOfReg: "",
      regAddress: "",
      primaryBusAddress: "",
      dateOfInc: "",
      countryRegNo: "",
      phoneNos: "",
      email: "",
      websiteURL: "",
      natureOfBusiness: "",
      industryReg: "",
      noOfEmployees: "",
      taxIDNo: "",
      authorizedSignatory1: "",
      designation1: "",
      authorizedSignatory2: "",
      designation2: "",
      signatoryDate: "",
      nameOfDeclarator: "",
      declaratorDate: "",
      declaratorPosition: "",
    },
  ],
  boards: [],
  shareHolders: [],
  questionnaires: [],
  documents: [
    {
      certificateOfIncorporationDoc: null,
      PSSPDoc: null,
      statementShareCap24Doc: null,
      amlAuditDoc: null,
      utilityBillDoc: null,
      dirPart7ADoc: null,
      returnAllot2ADoc: null,
      auditDoc: null,
      notSituationCAC3Doc: null,
      memorandumAndArticlesOfAssociationDoc: null,
      govPOIDirDoc: null,
      shareHolderUBODoc: null,
      UBOsDoc: null,
    },
  ],
};

export const convertBytesToKB = (bytes) => {
  return (bytes / 1024).toFixed(2);
};

export const modifyQuestionnaires = (questionnaires) => {
  return questionnaires?.map((questionnaire) => {
    if (
      questionnaire?.answer &&
      questionnaire?.answer.toLowerCase() === "yes"
    ) {
      const { id, ...rest } = questionnaire;
      return rest;
    } else {
      const { id, details, ...rest } = questionnaire;
      return rest;
    }
  });
};
