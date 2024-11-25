import React from "react";
import { useLocation } from "react-router-dom";
import SingleLlc from "../components/records/llc/SingleLlc";
import SingleSole from "../components/records/sole/SingleSole";
import SingleIndi from "../components/records/indi/SingleIndi";

const SingleRecord = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");

  const path = pathSegments[2];

  return (
    <div className="px-10 py-4">
      {path === "llc" ? (
        <SingleLlc />
      ) : path === "sole" ? (
        <SingleSole />
      ) : (
        <SingleIndi />
      )}
    </div>
  );
};

export default SingleRecord;
