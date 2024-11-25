import React from "react";
import Asterisk from "../../utils/Asterisk";
import { useIndieCtx } from "../../../context/formContext/IndieFormContext";

const FormInputTwo = ({ htmlFor, label, required, type, name, value }) => {
  const { fillPersonalInfo } = useIndieCtx();

  const handleChange = (e) => {
    fillPersonalInfo(e);
  };

  return (
    <div className="form-group font-bold w-full mb-4 md:w-1/2">
      <div className="flex flex-col">
        <label htmlFor={htmlFor} className="flex items-center mb-2">
          <span className="mr-2">{label}</span>
          <span>
            {" "}
            <Asterisk required={required} />
          </span>
        </label>
        <input
          type={type}
          name={name}
          value={value}
          className="border border-black outline-none rounded-xl py-3 px-4 font-bold text-black"
          required={required}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FormInputTwo;
