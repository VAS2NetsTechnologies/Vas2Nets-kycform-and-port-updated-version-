import React, { useEffect, useState } from "react";
import CoporateInfo from "./cooporate/CoporateInfo";
import Footer from "../../../footer/Footer";
import { useStepContext } from "../../../../context/stepContext/stepContext";
import { customFetch } from "../../../../utils/http";
import { useFormCtx } from "../../../../context/formContext/formContext";
import { toast } from "react-toastify";
import ConfirmationModal from "../../../../../components/ConfirmationModal";
import { useLocation, useNavigate } from "react-router-dom";

const SectionOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { handleStep } = useStepContext();

  const { coporateInfo } = useFormCtx();

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
  } = coporateInfo[0];

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmitHere = async () => {
    setLoading(true);
    try {
      // formData instance for companyInfo
      const formDataCO = new FormData();

      localStorage.setItem("ln", legalName);

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

      const { data } = await customFetch.post("v2nClientInfo", formDataCO);

      const normalizedStatus = data.status?.trim().toLowerCase();

      if (normalizedStatus === "success") {
        toast.success("Successfully submitted!", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
        });

        setTimeout(() => {
          handleStep(2);
        }, 5000);
      } else if (normalizedStatus === "sucessfully") {
        toast.success("Successfully updated!", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
        });
        setTimeout(() => {
          handleStep(2);
        }, 4000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirmSubmit = () => {
    setShowModal(false);
    handleSubmitHere();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <CoporateInfo />

        <div className="submit-btn flex justify-end py-8">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-md cursor-pointer font-bold capitalize"
          >
            {loading ? "Submitting..." : "Next"}
          </button>
        </div>
      </form>
      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmSubmit}
      />
      {/* footer */}
      <Footer />
    </>
  );
};

export default SectionOne;
