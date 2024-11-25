import React, { useEffect } from "react";
import Preview from "../../../Preview/Preview";
import Heading from "../../../utils/Heading";
import { MdPreview } from "react-icons/md";
import Controls from "../../../controls/Control";
import { useStepContext } from "../../../../context/stepContext/stepContext";

const PreviewPage = () => {
  const { handleStep } = useStepContext();

  const handleSubmitHere = async (e) => {
    e.preventDefault();

    handleStep(5);
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <form onSubmit={handleSubmitHere}>
      <div className="heading flex items-center space-x-2 py-8">
        <MdPreview className="text-2xl text-red-600 font-bold" />
        <Heading text="PREVIEW YOUR INFORMATION" />
      </div>
      <Preview />
      <Controls back={3} />
    </form>
  );
};

export default PreviewPage;
