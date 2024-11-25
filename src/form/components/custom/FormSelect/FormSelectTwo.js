import React from "react";

import Asterisk from "../../utils/Asterisk";
import { useIndieCtx } from "../../../context/formContext/IndieFormContext";

const FormSelectTwo = ({ options, name, label, required, mode, value }) => {
  const { fillPersonalInfo } = useIndieCtx();

  const handleChange = (e) => {
    fillPersonalInfo(e);
  };

  return (
    <div className="form-group w-full md:w-1/2">
      <div className="">
        <div className="flex items-center text-black font-bold">
          <label htmlFor="licensingRegulator">{label}</label>
          <Asterisk required={required} />
        </div>

        <select
          name={name}
          onChange={handleChange}
          className="border border-black w-full outline-none font-bold  py-3 px-4 rounded-xl flex-shrink-0 cursor-pointer"
          value={value || ""}
          required
        >
          {mode === "reg" ? (
            <option value="">Select Licensing Authority/Regulator</option>
          ) : mode === "entity" ? (
            <option value="">Select Entity</option>
          ) : mode === "nob" ? (
            <option value="">Select Business</option>
          ) : mode === "gender" ? (
            <option value="">Select Gender</option>
          ) : mode === "nationality" ? (
            <option value="">Select Nationality</option>
          ) : mode === "occupation" ? (
            <option value="">Select Occupation</option>
          ) : (
            <option value=""></option>
          )}

          {[...new Set(options.map((option) => option.name))]
            .sort((a, b) => a.localeCompare(b))
            .map((uniqueOption, index) => (
              <option
                key={index}
                className="py-4 bg-black text-white capitalize"
                value={uniqueOption}
              >
                {uniqueOption}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default FormSelectTwo;
