import React from "react";
import Asterisk from "../../utils/Asterisk";
import { useFormCtx } from "../../../context/formContext/formContext";

const Text = ({
  htmlFor,
  label,
  required,
  type,
  name,
  relative,
  top,
  inputColor,
  value,
}) => {
  const { fillCoporateInfo } = useFormCtx();

  const handleChange = (e) => {
    fillCoporateInfo(e);
  };
  return (
    <div className={`form-group  ${relative} ${top} w-full md:w-1/2`}>
      <div className="flex flex-col">
        <label htmlFor={htmlFor} className="flex items-center">
          <span
            className={`font-bold ${inputColor ? "text-white" : "text-black"}`}
          >
            {label}
          </span>
          <span> <Asterisk required={required}/></span>
        </label>
        <input
          type={type}
          name={name}
          value={value || ""}
          className={`border border-black w-full outline-none rounded-xl py-3 px-4 font-bold text-black`}
          onChange={handleChange}
          required={required}
        />
      </div>
    </div>
  );
};

export default Text;
