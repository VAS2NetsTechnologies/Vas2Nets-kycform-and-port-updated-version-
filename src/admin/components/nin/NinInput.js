import React, { useState } from "react";
import { customFetch } from "../../util/http";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NinInput = () => {
  const [ninNo, setNinNo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleValidation = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("nin", ninNo);

    try {
      const { data } = await customFetch.post("v2nnin_validator", formData);
      console.log(data);
      if (data.message === "validation was successful") {
        toast.success("Validation successful!");
        setNinNo("");

        window.location.reload();
      } else {
        toast.error("Validation failed!");
      }
    } catch (error) {
      console.error("Error validating NIN:", error);
      toast.error("An error occurred while validating NIN.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const newNin = e.target.value.trim();
    setNinNo(newNin);
  };

  return (
    <div className="w-full mr-auto py-6 z-50 md:w-1/2">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="searchByLegalName"
          className="block w-full p-4 ps-10 text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-gray-400"
          placeholder="Enter NIN"
          value={ninNo}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:hover:bg-gray-800 dark:focus:ring-blue-800"
          onClick={handleValidation}
          disabled={!ninNo.trim() || loading}
        >
          {loading ? (
            <div className="w-6 h-6 border-t-2 border-b-2 border-gray-200 rounded-full animate-spin"></div>
          ) : (
            "Validate"
          )}
        </button>
      </div>
    </div>
  );
};

export default NinInput;
