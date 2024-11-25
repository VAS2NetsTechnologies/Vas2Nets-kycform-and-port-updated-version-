import React from "react";
import Asterisk from "../../utils/Asterisk";
import { useIndieCtx } from "../../../context/formContext/IndieFormContext";

const FormDate = ({ label, htmlFor, id, name, required, value, customCl , cl}) => {
  const { fillPersonalInfo } = useIndieCtx();

  const handleChange = (e) => {
    fillPersonalInfo(e);
  };

  return (
    <div className={`${customCl ? 'relative -top-1': ''}`}>
      <div className={`flex items-center ${cl ? 'text-white' : 'text-black'} font-bold`}>
        <label htmlFor={htmlFor} className={`block ${cl ? 'text-black' : 'text-white '} mb-2`}>
          {label}
        </label>
        <Asterisk required={required} mode={"ignore"} />
      </div>

      <input
        type="date"
        id={id}
        name={name}
        className={`border border-black rounded text-black px-3 ${
          customCl ? "py-1 text-black" : "py-2"
        } w-full text-xl`}
        required={required}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormDate;
