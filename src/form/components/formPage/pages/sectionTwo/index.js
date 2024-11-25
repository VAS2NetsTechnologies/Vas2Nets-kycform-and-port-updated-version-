import React, { useEffect } from "react";
import Ownership from "./ownership/Ownership";
import Controls from "../../../controls/Control";
import Footer from "../../../footer/Footer";
import { useStepContext } from "../../../../context/stepContext/stepContext";
import Board from "./board/Board";

const SectionTwo = () => {
  const { handleStep } = useStepContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitHere = async (e) => {
    e.preventDefault();

    handleStep(3);
  };

  return (
    <form onSubmit={handleSubmitHere}>
      <Board />
      <Ownership />

      <div className="">
        <Controls back={1} />
      </div>
      <Footer />
    </form>
  );
};

export default SectionTwo;
