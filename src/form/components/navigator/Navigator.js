import React from "react";
import { motion } from "framer-motion";
import { useStepContext } from "../../context/stepContext/stepContext";
import { slideDownVariant } from "../../utils/Variants";

const Navigator= () => {
  const { stepLists } = useStepContext();

  const displaySteps = stepLists?.map((step, index) => (
    <div
      key={index}
      className={
        index !== stepLists.length - 1
          ? "w-full flex items-center"
          : "flex items-center"
      }
    >
      <div className="relative flex flex-col items-center">
        <div
          className={`rounded-full transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center py-3 ${
            step.selected
              ? "bg-black text-white font-bold border-black shadow-md"
              : ""
          }`}
        >
          {/* display number */}
          {step.completed ? (
            <span className="text-white font-bold text-xl ">&#10003;</span>
          ) : (
            <span className="text-black font-bold text-xl">{index + 1}</span>
          )}
        </div>
        <div
          className={`absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase hidden md:flex ${
            step.highlighted ? "text-gray-900" : "text-gray-300"
          }`}
        >
          {/* display description */}
          <h4 className="text-sm font-bold text-black lg:text-md xl:text-xl">
            {" "}
            {step.desc}
          </h4>
        </div>
      </div>
      <div
        className={`flex-auto border-t-4 transition duration-200 ease-in-out hidden md:flex  ${
          step.completed ? "border-black" : "border-gray-400"
        }`}
      >
        {/* display line */}
      </div>
    </div>
  ));

  return (
    <motion.div
      variants={slideDownVariant}
      initial="hidden"
      animate="visible"
      className="flex mx-auto"
    >
      {displaySteps}
    </motion.div>
  );
};

export default Navigator;
