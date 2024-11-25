import React, { useEffect } from "react";
import CoporateInfo from "./cooporate/CoporateInfo";
import Footer from "../../../footer/Footer";
import { useStepContext } from "../../../../context/stepContext/stepContext";

const SectionOne = () => {
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { handleStep } = useStepContext();

  const handleSubmitHere = async (e) => {
    e.preventDefault();

    handleStep(2);
  };

  return (
    <>
      <form onSubmit={handleSubmitHere}>
        <CoporateInfo />
        
        <div className="submit-btn flex justify-end py-8">
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-md cursor-pointer font-bold capitalize"
          >
            Next
          </button>
        </div>
      </form>
      {/* footer */}
      <Footer />
    </>
  );
};

export default SectionOne;
