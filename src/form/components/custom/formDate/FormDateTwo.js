import React from "react";
import Asterisk from "../../utils/Asterisk";
import { useSoleCtx } from "../../../context/formContext/soleContext";

const FormDateTwo = ({ label, htmlFor, id, name, required, value, cl }) => {
  const { fillPersonalInfo } = useSoleCtx();

  const handleChange = (e) => {
    fillPersonalInfo(e);
  };

  return (
    <div className="form-group font-bold w-full mb-4 md:w-1/2">
      <div
        className={`flex items-center ${
          cl ? "text-white" : "text-black"
        } font-bold`}
      >
        <label htmlFor={htmlFor} className="block  mb-2">
          {label}
        </label>
        <Asterisk required={required} mode={"ignore"} />
      </div>

      <input
        type="date"
        id={id}
        name={name}
        className="border border-black rounded py-1
        text-xl"
        required={required}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormDateTwo;
