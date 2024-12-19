import React, { useEffect, useState } from "react";
import { FaBusinessTime, FaPlus, FaTrash } from "react-icons/fa";
import Heading from "../../../../utils/Heading";
import { useFormCtx } from "../../../../../context/formContext/formContext";

const Board = () => {
  const { fillBoard } = useFormCtx();

  const initialBoard = JSON.parse(localStorage.getItem("board")) || [
    { name: "", position: "", nationality: "", residence: "" },
  ];

  const [board, setBoard] = useState(initialBoard);

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
  }, [board]);

  const handleInputChange = (index, e) => {
    const updatedBoards = [...board];
    updatedBoards[index][e.target.name] = e.target.value;
    setBoard(updatedBoards);
    fillBoard(board);
  };

  const addRow = () => {
    setBoard([
      ...board,
      { name: "", position: "", nationality: "", residence: "" },
    ]);
  };

  const removeRow = (index) => {
    if (index !== 0) {
      const updatedBoards = [...board];
      updatedBoards.splice(index, 1);
      setBoard(updatedBoards);
      fillBoard(updatedBoards);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="heading flex items-center space-x-2">
        <FaBusinessTime className="text-2xl text-red-600 font-bold" />
        <Heading text="List your board members and beneficiaries with above 25% below." />
      </div>

      <table className="w-full table-auto py-4">
        <thead>
          <tr className="bg-red-600 text-white">
            <th className="p-2">
              <button
                type="button"
                onClick={addRow}
                className="cursor-pointer p-2 text-center w-full text-white bg-black"
              >
                <FaPlus className="inline-block" />
              </button>
            </th>
            <th className="p-2">Name of Board Member</th>
            <th className="p-2">Position</th>
            <th className="p-2">Nationality</th>
            <th className="p-2">Country of Residence</th>
          </tr>
        </thead>
        <tbody>
          {board.map((bd, index) => (
            <tr key={index} className="text-center">
              <td className="p-2">
                {index !== 0 && (
                  <button
                    type="button"
                    onClick={() => removeRow(index)}
                    className="bg-red-600 text-white w-full p-2 text-center"
                  >
                    <FaTrash className="inline-block cursor-pointer" />
                  </button>
                )}
              </td>

              <TdInput
                index={index}
                name="name"
                value={bd.name || ""}
                required={true}
                handleInputChange={handleInputChange}
              />
              <TdInput
                index={index}
                name="position"
                value={bd.position || ""}
                required={true}
                handleInputChange={handleInputChange}
              />
              <TdInput
                index={index}
                name="nationality"
                value={bd.nationality || ""}
                required={true}
                handleInputChange={handleInputChange}
              />
              <TdInput
                index={index}
                name="residence"
                value={bd.residence || ""}
                required={true}
                handleInputChange={handleInputChange}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// TdInput component
const TdInput = ({ index, name, value, required, handleInputChange }) => (
  <td className="p-2">
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e) => handleInputChange(index, e)}
      className="border border-black outline-none w-[330px] font-bold py-2 px-3 rounded-md"
      required={true}
    />
  </td>
);

export default Board;
