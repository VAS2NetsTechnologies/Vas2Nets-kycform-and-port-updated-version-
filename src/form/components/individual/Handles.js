import React, { useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { TiSocialSkype } from "react-icons/ti";
import Heading from "../utils/Heading";
import { useIndieCtx } from "../../context/formContext/IndieFormContext";

const Handles = () => {
  const { fillSocials } = useIndieCtx();

  const initialIndieSocials = JSON.parse(localStorage.getItem("indieSocials")) || [
    { handle: "", name: "" },
  ];

  const [socials, setSocials] = useState(initialIndieSocials);

  useEffect(() => {
    localStorage.setItem("indieSocials", JSON.stringify(socials));
  }, [socials]);

  const handleInputChange = (index, e) => {
    const updatedSocials = [...socials];
    updatedSocials[index][e.target.name] = e.target.value;
    setSocials(updatedSocials);
    fillSocials(updatedSocials);
  };

  const addRow = () => {
    setSocials([...socials, { handle: "", name: "" }]);
  };

  const removeRow = (index) => {
    if (index !== 0) {
      const updatedSocials = [...socials];
      updatedSocials.splice(index, 1);
      setSocials(updatedSocials);
      fillSocials(updatedSocials);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="heading flex items-center space-x-2 py-8">
        <TiSocialSkype className="text-2xl text-red-600 font-bold" />
        <Heading text="SOCIAL MEDIA HANDLES" />
      </div>

      <table className="w-full table-auto py-4">
        <thead>
          <tr className="bg-red-700">
            <th className="p-2">
              <button
                onClick={addRow}
                className="cursor-pointer p-2 text-center w-full text-white bg-black"
              >
                <FaPlus className="inline-block" />
              </button>
            </th>
            <th className="p-4 text-white">Social Media Handle</th>
            <th className="p-4 text-white">Social Media Name</th>
          </tr>
        </thead>
        <tbody>
          {socials.map((social, index) => (
            <tr key={index} className="text-center">
              <td className="p-2">
                {index !== 0 && (
                  <button
                    onClick={() => removeRow(index)}
                    className="bg-red-600 text-white w-full p-2 text-center"
                  >
                    <FaTrash className="inline-block cursor-pointer" />
                  </button>
                )}
              </td>

              <TdInput
                index={index}
                name="handle"
                value={social.handle || ""}
                required={index !== 0}
                handleInputChange={handleInputChange}
              />
              <TdInput
                index={index}
                name="name"
                value={social.name || ""}
                required={index !== 0}
                handleInputChange={handleInputChange}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TdInput = ({ index, name, value, required, handleInputChange }) => (
  <td className="p-2">
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e) => handleInputChange(index, e)}
      className="border border-black outline-none font-bold w-[400px] py-2 px-3 sm:py-2 md:py-2 lg:py-3 rounded-md"
      required={required}
    />
  </td>
);

export default Handles;
