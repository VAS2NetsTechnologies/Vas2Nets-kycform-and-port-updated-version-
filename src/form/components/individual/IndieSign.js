import React from "react";
import FormInputTwo from "../custom/formInputs/FormInputTwo";
import FormDate from "../custom/formDate/FormDate";
import { useIndieCtx } from "../../context/formContext/IndieFormContext";

const IndieSign = () => {
  const { personalInfo } = useIndieCtx();

  const { indieSignatoryName, indieSignatoryDate } = personalInfo[0];

 
  return (
    <section className="flex flex-col items-center space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
      <FormInputTwo
        htmlFor="indieSignatoryName"
        label="Name (same on valid means of identification)"
        required={true}
        type="text"
        name="indieSignatoryName"
        value={indieSignatoryName}
      />

      <div>
        <FormDate
          label={"Date"}
          type="date"
          id="indieSignatoryDate"
          name="indieSignatoryDate"
          customCl={true}
          required
          value={indieSignatoryDate}
        />
      </div>
    </section>
  );
};

export default IndieSign;
