import React from "react";
import { FaTrash } from "react-icons/fa";
import TdInput from "./TdInput";
const TableBody = ({ owners, handleInputChange, removeRow }) => {
  return (
    <tbody>
      {owners.map((owner, index) => (
        <tr key={index} className="text-center">
          <td className="p-2">
            {index === 0 ? (
              ""
            ) : (
              <button
                onClick={() => removeRow(index)}
                type="button"
                className="bg-red-600 text-white w-full p-2 text-center"
              >
                <FaTrash className="inline-block" />
              </button>
            )}
          </td>
          <TdInput
            index={index}
            value={owner.name || ""}
            name="name"
            handleInputChange={handleInputChange}
          />
          <TdInput
            index={index}
            name="shareHolding"
            value={owner.shareHolding}
            handleInputChange={handleInputChange}
            type="number"
          />
          <TdInput
            index={index}
            name="nationality"
            value={owner.nationality}
            handleInputChange={handleInputChange}
          />
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
