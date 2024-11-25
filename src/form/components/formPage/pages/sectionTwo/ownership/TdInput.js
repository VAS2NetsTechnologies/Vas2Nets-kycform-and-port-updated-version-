import React from "react";

const TdInput = ({ index, name, value, handleInputChange }) => {
  return (
    <td className="p-2">
      <input
        type="text"
        value={value}
        name={name}
        onChange={(e) => handleInputChange(index, e)}
        className="w-[350px] py-2 px-6 rounded-xl border font-bold border-gray-400"
        required
      />
    </td>
  );
};

export default TdInput;
