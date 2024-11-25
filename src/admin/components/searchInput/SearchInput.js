import React from "react";

const SearchInput = ({ value, onChange, handleSearch }) => {
  return (
    <div className="w-full z-50 md:w-1/2 ml-auto px-4 md:px-0">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
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
          className="block w-full p-4 pl-10 pr-40 text-black border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
          placeholder="Legal Name or Name of Company"
          value={value}
          onChange={onChange}
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="absolute right-2.5 bottom-2 text-white bg-red-600 hover:bg-gray-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-500 cursor-pointer dark:hover:bg-gray-800"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
