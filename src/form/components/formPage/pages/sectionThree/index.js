import React, { useEffect, useState } from "react";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { useFormCtx } from "../../../../context/formContext/formContext";
import { customFetch } from "../../../../utils/http";
import { useStepContext } from "../../../../context/stepContext/stepContext";
import Heading from "../../../utils/Heading";
import Yes from "./Yes";

const SectionThree = () => {
  const { handleStep } = useStepContext();
  const { state } = useFormCtx();
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const { modifiedQuestionnaires } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // formData instance for questionnaire
    const formDataQuestionnaires = new FormData();
    const legalName = localStorage.getItem("ln");
    formDataQuestionnaires.append("legalName", legalName);
    formDataQuestionnaires.append(
      "questionnaires",
      JSON.stringify(modifiedQuestionnaires)
    );
    // end of instance

    try {
      const { data } = await customFetch.post(
        "v2nclientsquestionnares",
        formDataQuestionnaires
      );

      if (!data?.status || data.status !== "successful") {
        setErrorModal(true);
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
        });
        setLoading(false);
      } else {
        toast.success("Successfully submitted!", {
          position: "top-center",
          autoClose: 4000,
          closeOnClick: true,
          draggable: true,
        });
        setTimeout(() => {
          handleStep(4);
        }, 4000);
      }
    } catch (error) {
      console.error("Something went wrong:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
      });
      setLoading(false);
    }
  };

  return (
    <section className="py-16">
      <div className="heading flex items-center space-x-2">
        <BsQuestionDiamondFill className="text-2xl text-red-600 font-bold" />
        <Heading text="QUESTIONNAIRES" />
      </div>

      <form onSubmit={handleSubmit}>
        <Yes />
        <div className="submit-btn flex justify-end py-8">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-md cursor-pointer font-bold capitalize"
          >
            {loading ? "Submitting..." : "Next"}
          </button>
        </div>
      </form>
      {errorModal && (
        <div className="error-modal">
          {/* Error modal content */}
        </div>
      )}
    </section>
  );
};

export default SectionThree;
