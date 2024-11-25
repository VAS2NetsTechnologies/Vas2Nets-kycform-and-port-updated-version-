import React from "react";
import FormDateTwo from "../custom/formDate/FormDateTwo";
import FormInputThree from "../custom/formInputs/FormInputThree";
import { useSoleCtx } from "../../context/formContext/soleContext";

const Solesign = () => {
  const { businessInfo } = useSoleCtx();

  const { soloSignatoryName, soloSignatoryDate } = businessInfo[0];

  return (
    <section className="flex flex-col items-center space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
      <FormInputThree
        htmlFor="soloSignatoryName"
        label="Name"
        required={true}
        type="text"
        name="soloSignatoryName"
        value={soloSignatoryName}
      />

      <div>
        <FormDateTwo
          label="Date"
          type="date"
          id="soloSignatoryDate"
          name="soloSignatoryDate"
          cl={true}
          required
          value={soloSignatoryDate}
        />
      </div>
    </section>
  );
};

export default Solesign;
