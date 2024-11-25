import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShapeDivider from "../clipPath/ShapeDivider";
import Down from "../clipPath/Down";
import Header from "../header/Header";
import Form from "./Form";
import { useIndieCtx } from "../../context/formContext/IndieFormContext";
import { modifyQuestionnaires } from "../../utils/utilFn";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/http";
import Modal from "../formPage/pages/sectionFour/Modal";

const Individual = () => {
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const navigate = useNavigate();

  const { state, hasFileErrors, personalInfo, socials, questionnaires } =
    useIndieCtx();

  const {
    IDName,
    meansID,
    gender,
    issueDate,
    expiryDate,
    IDNo,
    resPermitNo,
    stateOfOrigin,
    resAddress,
    workAddress,
    phoneNos,
    email,
    taxID,
    DOB,
    nationality,
    occupation,
    posHeld,
    employerName,
    indieSignatoryName,
    indieSignatoryDate,
  } = personalInfo[0];

  const { documents } = state;

  const modifiedQuestionnaires = modifyQuestionnaires(questionnaires);

  const handleFileErrors = () => {
    const fileErrors = {};

    Object.entries(documents[0]).forEach(([key, value]) => {
      if (!value) {
        fileErrors[key] = true;
      }
    });

    return fileErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fileErrors = handleFileErrors();
    if (
      state.documents.some((document) =>
        Object.values(document).some((value) => !value)
      )
    ) {
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
    }

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
      const formData = new FormData();

      formData.append("IDName", IDName);
      formData.append("legalName", IDName);
      formData.append("meansID", meansID);
      formData.append("gender", gender);
      formData.append("issueDate", issueDate);
      formData.append("expiryDate", expiryDate);
      formData.append("IDNo", IDNo);
      formData.append("resPermitNo", resPermitNo);
      formData.append("stateOfOrigin", stateOfOrigin);
      formData.append("resAddress", resAddress);
      formData.append("workAddress", workAddress);
      formData.append("phoneNos", phoneNos);
      formData.append("email", email);
      formData.append("taxID", taxID);
      formData.append("DOB", DOB);
      formData.append("nationality", nationality);
      formData.append("occupation", occupation);
      formData.append("posHeld", posHeld);
      formData.append("employerName", employerName);
      formData.append("signatoryName", indieSignatoryName);
      formData.append("signatoryDate", indieSignatoryDate);
      formData.append("questionnaires", JSON.stringify(modifiedQuestionnaires));
      formData.append("socials", JSON.stringify(socials));

      Object.entries(documents[0]).forEach(([key, value]) => {
        formData.append(key, value);
      });

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
      }

      const response = await customFetch.post(
        "saveIndividualDetails",
        formData
      );

      if (response.status !== 200) {
        setErrorModal(true);
      }

      // console.log(response.data);

      if (response.data.message === "sent successfully") {
        navigate("/success");
      }
    }
  };

  return (
    <main className="body">
      {errorModal && (
        <Modal title="Error Occurred" onClose={() => setErrorModal(false)}>
          <p>There was an error during submission. Please try again later.</p>
        </Modal>
      )}
      <section className="relative">
        <ShapeDivider />

        <div className="absolute left-6 py-4 lg:right-4 lg:py-4 lg:top-2 xl:top-1 xl:left-14 xl:py-2">
          <Header />
        </div>
      </section>
      <form
        onSubmit={handleSubmit}
        className="relative max-w-[85rem] mx-auto top-32 px-6 w-full bg-white  md:px-4"
      >
        <Form loading={loading} />
      </form>

      <Down />
    </main>
  );
};

export default Individual;
