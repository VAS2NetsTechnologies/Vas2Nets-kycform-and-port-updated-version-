import React, { useEffect } from "react";
import { BsQuestionDiamondFill } from "react-icons/bs";
import Controls from "../../../controls/Control";
import Heading from "../../../utils/Heading";
import Footer from "../../../footer/Footer";
import Yes from "./Yes";
import { useStepContext } from "../../../../context/stepContext/stepContext";

const SectionThree = () => {
  const { handleStep } = useStepContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleStep(4);
  };

  return (
    <section className="py-16">
      <div className="heading flex items-center space-x-2">
        <BsQuestionDiamondFill className="text-2xl text-red-600 font-bold" />
        <Heading text="QUESTIONNAIRES" />
      </div>

      <form onSubmit={handleSubmit}>
        <Yes />

        <Controls back={2} />
        <Footer />
      </form>
    </section>
  );
};

export default SectionThree;
