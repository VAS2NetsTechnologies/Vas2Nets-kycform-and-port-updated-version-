import { createContext, useContext, useEffect, useState } from "react";
import { steps } from "../../utils/steps";



const stepContext = createContext({});

export const StepProvider = ({ children }) => {
  const [stepLists, setStepLists] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      // step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    // console.log(newSteps);

    return newSteps;
  };

  useEffect(() => {
    const current = updateStep(currentStep - 1, steps);
    setStepLists(current);
  }, [currentStep]);

  // console.log(stepLists);

  const handleStep = (step) => {
    setCurrentStep(step);
  };

  const values = {
    stepLists,
    setStepLists,
    currentStep,
    setCurrentStep,
    handleStep,
  };

  return <stepContext.Provider value={values}>{children}</stepContext.Provider>;
};

export const useStepContext = () => useContext(stepContext);
