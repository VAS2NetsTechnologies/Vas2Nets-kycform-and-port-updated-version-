import React from "react";
import { motion } from "framer-motion";
import FormPage from "../components/formPage/FormPage";
import SectionOne from "../components/formPage/pages/sectionOne";
import SectionTwo from "../components/formPage/pages/sectionTwo";
import SectionThree from "../components/formPage/pages/sectionThree";
import SectionFour from "../components/formPage/pages/sectionFour";
import { useStepContext } from "../context/stepContext/stepContext";
import { leftSlideVariant } from "../utils/Variants";
import PreviewPage from "../components/formPage/pages/preview/PreviewPage";



const Forms = () => {
  const { currentStep } = useStepContext();
  const displayForms = (step) => {
    switch (step) {
      case 1:
        return <SectionOne />;
      case 2:
        return <SectionTwo />;
      case 3:
        return <SectionThree />;
        case 4:
        return <PreviewPage />;
      case 5:
        return <SectionFour />;

      default:
        break;
    }
  };
  return (
    <div className="w-full mx-auto">
      <motion.div
        variants={leftSlideVariant}
        initial="hidden"
        animate="visible"
        className="w-full form-details mt-16 mx-auto"
      >
        {/* forms pages */}
        <FormPage>{displayForms(currentStep)}</FormPage>
      </motion.div>
    </div>
  );
};

export default Forms;
