import React from "react";

const TdInput = ({ index, name, value, required, handleInputChange, type = "text" }) => (
  <td className="p-2">
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => handleInputChange(index, e)}
      className="border border-black outline-none w-[330px] font-bold py-2 px-3 rounded-md"
      required={true}
    />
  </td>
);

export default TdInput;
