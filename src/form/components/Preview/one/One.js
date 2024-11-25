import React from "react";
import { useFormCtx } from "../../../context/formContext/formContext";

const One = () => {
  const { coporateInfo } = useFormCtx();
  const {
    legalName,
    tradeName,
    typeOfInc,
    countryOfReg,
    regAddress,
    primaryBusAddress,
    dateOfInc,
    countryRegNo,
    phoneNos,
    email,
    websiteURL,
    natureOfBusiness,
    industryReg,
    noOfEmployees,
    taxIDNo,
  } = coporateInfo[0];

  return (
    <div className="mx-auto mt-8 p-6 rounded-lg shadow-md bg-white">
      <div className="mb-4">
        <p className="font-semibold">Company Legal Name:</p>
        <p>{legalName}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Company Trade Name:</p>
        <p>{tradeName}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Type of Incorporation </p>
        <p>{typeOfInc}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Country of Registration:</p>
        <p>{countryOfReg}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Legal or Registered Address:</p>
        <p>{regAddress}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Primary Business Address r:</p>
        <p>{primaryBusAddress}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Date of Incorporation:</p>
        <p>{dateOfInc}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Company Registration Number:</p>
        <p>{countryRegNo}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Company Phone Number(s):</p>
        <p>{phoneNos}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Company Email</p>
        <p>{email}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Company Website URL:</p>
        <p>{websiteURL}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Nature of Business:</p>
        <p>{natureOfBusiness}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">List your industry regulator:</p>
        <p>{industryReg}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Number of Company Employees:</p>
        <p>{noOfEmployees}</p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Tax Identification Number:</p>
        <p>{taxIDNo}</p>
      </div>
    </div>
  );
};

export default One;
