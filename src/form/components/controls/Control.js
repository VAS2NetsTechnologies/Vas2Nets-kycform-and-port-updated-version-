import React from "react";
import { useStepContext } from "../../context/stepContext/stepContext";

const Controls = ({ back, loading }) => {
  const { handleStep } = useStepContext();

  return (
    <div className="buttons flex items-center justify-between pt-8">
      <button
        onClick={() => handleStep(back)}
        className="text-white capitalize bg-black font-semibold py-2 px-6 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-red-900"
      >
        back
      </button>

      <button
        type="submit"
        disabled={loading}
        className="text-white capitalize bg-red-600 font-semibold py-2 px-6 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-red-600 hover:transition-all flex items-center justify-center"
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <span>Submitting...</span>
          </div>
        ) : (
          "Next"
        )}
      </button>
    </div>
  );
};

export default Controls;
