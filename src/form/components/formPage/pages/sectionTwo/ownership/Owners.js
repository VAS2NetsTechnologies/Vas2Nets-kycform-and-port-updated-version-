import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import TableBody from "./TableBody";
import { useFormCtx } from "../../../../../context/formContext/formContext";

const OwnersTable = () => {
  const { fillOwnershipInfo } = useFormCtx();

  const initialShareHolders = JSON.parse(
    localStorage.getItem("shareHolders")
  ) || [{ name: "", shareHolding: "", nationality: "" }];

  const [shareHolders, setShareHolders] = useState(initialShareHolders);

  useEffect(() => {
    localStorage.setItem("shareHolders", JSON.stringify(shareHolders));
    // console.log(owners);
  }, [shareHolders]);

  const handleInputChange = (index, e) => {
    const updatedShareHolders = [...shareHolders];
    updatedShareHolders[index][e.target.name] = e.target.value;
    setShareHolders(updatedShareHolders);
    fillOwnershipInfo(shareHolders);
  };

  const addRow = () => {
    if (shareHolders.length < 5) {
      setShareHolders([
        ...shareHolders,
        { name: "", shareHolding: "", nationality: "" },
      ]);
    }
  };

  const removeRow = (index) => {
    const updatedOwners = [...shareHolders];
    updatedOwners.splice(index, 1);
    setShareHolders(updatedOwners);
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th colSpan="4" className="font-bold py-4 text-red-600 text-lg">
              Please list the names of all owners & Directors in the table below
              and their ownership interest (add further rows if necessary):
            </th>
          </tr>
          <tr className="bg-gray-200">
            <th className="p-2">
              <button
                onClick={addRow}
                type="button"
                className={`cursor-pointer p-2 text-center w-full text-white ${
                  shareHolders.length < 5
                    ? "bg-black"
                    : "bg-black/10 cursor-not-allowed"
                }`}
                disabled={shareHolders.length >= 5}
              >
                <FaPlus className="inline-block" />
              </button>
            </th>
            <th className="p-2">Name of Beneficiary</th>
            <th className="p-2">Shareholding(%)</th>
            <th className="p-2">Nationality</th>
          </tr>
        </thead>
        <TableBody
          owners={shareHolders}
          handleInputChange={handleInputChange}
          removeRow={removeRow}
        />
      </table>
    </div>
  );
};

export default OwnersTable;
