import React, { useEffect, useState } from "react";
import { IoDocumentSharp } from "react-icons/io5";
import Heading from "../../../utils/Heading";
import { useNavigate } from "react-router-dom";
import { useFormCtx } from "../../../../context/formContext/formContext";
import Controls from "../../../controls/Control";
import Documents from "./Documents";
import { toast } from "react-toastify";
import Footer from "../../../footer/Footer";
import Declaration from "./Declaration";
import { customFetch } from "../../../../utils/http";
import { modifyQuestionnaires } from "../../../../utils/utilFn";
import Modal from "./Modal";

const SectionFour = () => {
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const navigate = useNavigate();

  const { state, coporateInfo, hasFileErrors } = useFormCtx();

  const {
    legalName,
    tradeName,
    typeOfInc,
    countryOfReg,
    regAddress,
    primaryBusAddress,
    dateOfInc,
    countryRegNo,
    phoneNos,
    email,
    websiteURL,
    natureOfBusiness,
    industryReg,
    noOfEmployees,
    taxIDNo,
    authorizedSignatory1,
    designation1,
    authorizedSignatory2,
    designation2,
    signatoryDate,
    nameOfDeclarator,
    declaratorDate,
    declaratorPosition,
  } = coporateInfo[0];

  const { questionnaires, documents, boards, shareHolders } = state;

  // Modify questionnaires
  const modifiedQuestionnaires = modifyQuestionnaires(questionnaires);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const signatories = [
    {
      authorizedSignatory1: {
        name: authorizedSignatory1,
        designation: designation1,
      },
      authorizedSignatory2: {
        name: authorizedSignatory2,
        designation: designation2,
      },
      signatoryDate: signatoryDate,
    },
  ];

  const declarator = [
    {
      declaration: {
        name: nameOfDeclarator,
        date: declaratorDate,
        position: declaratorPosition,
      },
    },
  ];

  const handleFileErrors = () => {
    const fileErrors = {};

    Object.entries(documents[0]).forEach(([key, value]) => {
      if (key !== "otherRelevantLicenseDoc" && !value) {
        fileErrors[key] = true;
      }
    });

    return fileErrors;
  };

  const handleSubmitHere = async (e) => {
    e.preventDefault();

    setLoading(true);

    const fileErrors = handleFileErrors();

    if (Object.keys(fileErrors).length > 0) {
      toast.error("Please fill all required fields in the Documents section");
      setLoading(false);
      return;
    }

    if (hasFileErrors()) {
      toast.error("UPLOAD ALL REQUIRED FILES)", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
      return;
    } else {
      // formData instance for companyInfo
      const formDataCO = new FormData();

      formDataCO.append("companyInfo[0][legalName]", legalName);
      formDataCO.append("companyInfo[0][tradeName]", tradeName);
      formDataCO.append("companyInfo[0][typeOfInc]", typeOfInc);
      formDataCO.append("companyInfo[0][countryOfReg]", countryOfReg);
      formDataCO.append("companyInfo[0][regAddress]", regAddress);
      formDataCO.append("companyInfo[0][primaryBusAddress]", primaryBusAddress);
      formDataCO.append("companyInfo[0][dateOfInc]", dateOfInc);
      formDataCO.append("companyInfo[0][countryRegNo]", countryRegNo);
      formDataCO.append("companyInfo[0][phoneNos]", phoneNos);
      formDataCO.append("companyInfo[0][email]", email);
      formDataCO.append("companyInfo[0][websiteURL]", websiteURL);
      formDataCO.append("companyInfo[0][natureOfBusiness]", natureOfBusiness);
      formDataCO.append("companyInfo[0][industryReg]", industryReg);
      formDataCO.append("companyInfo[0][noOfEmployees]", noOfEmployees);
      formDataCO.append("companyInfo[0][taxIDNo]", taxIDNo);
      // end of this instance for companyInfo

      // formData instance for  board and shareholders
      const formDataBS = new FormData();
      formDataBS.append("legalName", legalName);
      formDataBS.append("boards", JSON.stringify(boards));
      formDataBS.append("shareHolders", JSON.stringify(shareHolders));
      // end of this instance

      // formData instance for questionnaire
      const formDataQuestionnaires = new FormData();
      formDataQuestionnaires.append("legalName", legalName);
      formDataQuestionnaires.append(
        "questionnaires",
        JSON.stringify(modifiedQuestionnaires)
      );
      // end of instance

      // formData instance for documents and declarators
      const formDataDocSig = new FormData();
      formDataDocSig.append("legalName", legalName);
      formDataDocSig.append("signatories", JSON.stringify(signatories));
      formDataDocSig.append("declarator", JSON.stringify(declarator));

      Object.entries(documents[0]).forEach(([key, value]) => {
        formDataDocSig.append(key, value);
      });

      // end of instance

      const toastConfig = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      };

      if (!navigator.onLine) {
        toast.error("Please check your internet connection", {
          ...toastConfig,
        });
        setLoading(false);
        return;
      }

      // section 1
      const responseCompanyInfo = await customFetch.post(
        "v2nClientInfo",
        formDataCO
      );
      console.log("section 1 ===>", responseCompanyInfo.data);
      if (responseCompanyInfo.status !== 200) {
        setErrorModal(true);
      }

      // // section 2
      const responseBS = await customFetch.post(
        "getv2nClientsBoardInfo",
        formDataBS
      );
      console.log("section 2 ===>", responseBS.data);
      if (responseBS.status !== 200) {
        setErrorModal(true);
      }
      // // // section 3
      const responseQuestions = await customFetch.post(
        "v2nclientsquestionnares",
        formDataQuestionnaires
      );
      console.log("section 3 ===>", responseQuestions.data);
      if (responseQuestions.status !== 200) {
        setErrorModal(true);
      }

      // // section 4
      const responseSDDOC = await customFetch.post(
        "v2nclientspostAndUploadFiles",
        formDataDocSig
      );
      console.log("section 4 ===>", responseSDDOC.data);
      if (responseSDDOC.status !== 200) {
        setErrorModal(true);
      }

      if (
        responseCompanyInfo.data.message &&
        responseBS.data.message &&
        responseSDDOC.data.message &&
        responseQuestions.data.message === "sent successfully"
      ) {
        navigate("/success");
      }

      setLoading(false);

      if (
        responseCompanyInfo.status >= 500 ||
        responseBS.status >= 500 ||
        responseQuestions.status >= 500 ||
        responseSDDOC.status >= 500
      ) {
        toast.error("An error occurred. Please try again", {
          ...toastConfig,
        });
        setLoading(false);
        return;
      }

      console.log("ok");
    }
  };

  return (
    <section>
      {errorModal && (
        <Modal title="Error Occurred" onClose={() => setErrorModal(false)}>
          <p>There was an error during submission. Please try again later.</p>
        </Modal>
      )}
      <div className="heading flex items-center space-x-2">
        <IoDocumentSharp className="text-2xl text-red-600 font-bold" />
        <Heading text="Documents" />
      </div>
      <section className="documents ">
        <header>
          <h1 className="text-red-600 font-bold py-8 text-xl">
            Maximum size of documents to be uploaded should be 5MB (in PDF &
            DOCX)
          </h1>
        </header>
        <form onSubmit={handleSubmitHere} encType="multipart/form-data">
          <div className="sections">
            <div className="px-6 md:px-2">
              <Documents />
            </div>

            <Declaration />
          </div>

          <Controls back={4} loading={loading} />
          <Footer />
        </form>
      </section>
    </section>
  );
};

export default SectionFour;
