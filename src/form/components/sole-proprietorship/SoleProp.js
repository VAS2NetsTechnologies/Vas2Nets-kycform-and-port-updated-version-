import React from "react";
import { useNavigate } from "react-router-dom";
import ShapeDivider from "../clipPath/ShapeDivider";
import Header from "../header/Header";
import Forms from "./Forms";
import Down from "../clipPath/Down";
import { useState } from "react";
import { useSoleCtx } from "../../context/formContext/soleContext";
import { modifyQuestionnaires } from "../../utils/utilFn";
import { toast } from "react-toastify";
import { customFetch } from "../../utils/http";
import Modal from "../formPage/pages/sectionFour/Modal";

const SoleProp = () => {
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const navigate = useNavigate();

  const { state, hasFileErrors, businessInfo, socials, questionnaires } =
    useSoleCtx();

  const {
    busName,
    natureOfBusiness,
    country,
    busAddress,
    busEmail,
    phoneNos,
    nameOfProp,
    addressOfProp,
    taxNo,
    dateOfInc,
    bvn,
    noOfEmployees,
    soloSignatoryName,
    soloSignatoryDate,
  } = businessInfo[0];

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

      formData.append("busName", busName);
      formData.append("legalName", busName);
      formData.append("natureOfBusiness", natureOfBusiness);
      formData.append("country", country);
      formData.append("busAddress", busAddress);
      formData.append("busEmail", busEmail);
      formData.append("nameOfProp", nameOfProp);
      formData.append("addressOfProp", addressOfProp);
      formData.append("taxNo", taxNo);
      formData.append("dateOfInc", dateOfInc);
      formData.append("bvn", bvn);
      formData.append("phoneNos", phoneNos);
      formData.append("noOfEmployees", noOfEmployees);
      formData.append("soloSignatoryName", soloSignatoryName);
      formData.append("soloSignatoryDate", soloSignatoryDate);

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

      const response = await customFetch.post("saveBusinessDetails", formData);

      // console.log(response.data);
      if (response.status !== 200) {
        setErrorModal(true);
      }

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
        <Forms loading={loading} />
      </form>

      <Down />
    </main>
  );
};

export default SoleProp;
