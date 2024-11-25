import React from "react";
import { CSVLink } from "react-csv";
import { llcCSV } from "./downloadCsv/LlcCsv";
import { soleCSV } from "./downloadCsv/SoleCsv";
import { indiCSV } from "./downloadCsv/IndiCsv";

const Csv = ({ recordsData, mode }) => {
  const getCsvData = () => {
    if (mode === "llc") {
      return llcCSV(recordsData);
    } else if (mode === "sole") {
      return soleCSV(recordsData);
    }
    return indiCSV(recordsData);
  };

  const getFilename = () => {
    if (mode === "llc") {
      return "llc_records.csv";
    } else if (mode === "sole") {
      return "sole_records.csv";
    }
    return "records.csv";
  };

  return (
    <CSVLink
      data={getCsvData()}
      className="bg-black text-white py-2 px-4 absolute left-0 rounded transition-all hover:bg-red-600 hover:border hover:border-red-600"
      filename={getFilename()}
    >
      Export CSV
    </CSVLink>
  );
};

export default Csv;
