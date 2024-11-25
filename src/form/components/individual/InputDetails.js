import React from "react";
import FormInputTwo from "../custom/formInputs/FormInputTwo";
import { genders, nationalities, occupations } from "../../utils/individualUtils";
import FormDate from "../custom/formDate/FormDate";
import { useIndieCtx } from "../../context/formContext/IndieFormContext";
import FormSelectTwo from "../custom/FormSelect/FormSelectTwo";

const InputDetails = () => {
  const { personalInfo } = useIndieCtx();

  const {
    IDName,
    meansID,
    gender,
    issueDate,
    expiryDate,
    IDNo,
    resPermitNo,
    stateOfOrigin,
    resAddress,
    workAddress,
    phoneNos,
    email,
    taxID,
    DOB,
    nationality,
    occupation,
    posHeld,
    employerName,
  } = personalInfo[0];

  return (
    <section className="px-10 py-14">
      {/* name on id and means of id */}
      <section className="flex flex-col items-center justify-between space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
        <FormInputTwo
          htmlFor="IDName"
          label="Name (same on valid means of identification)"
          required={true}
          type="text"
          name="IDName"
          value={IDName}
        />
        <FormInputTwo
          htmlFor="meansID"
          label="Valid Means of Identification (NIN, Driver's License, Int'l Passport)"
          required={true}
          type="text"
          name="meansID"
          value={meansID}
        />
      </section>

      {/* gender , expiry && issue date */}
      <section className="flex flex-col items-center space-y-8 space-x-0 md:space-y-0 md:space-x-4 xl:space-x-10 md:flex-row">
        <FormSelectTwo
          options={genders}
          name="gender"
          value={gender}
          label="Gender"
          required={true}
          mode={"gender"}
        />
        <div className="w-full md:w-1/2 bg-black rounded-md">
          <h1 className="text-sm text-center mx-auto xl:text-lg text-white border border-white px-4 md:px-0">
            Identification Document Issue & Expiry Date
          </h1>
          <hr />
          <div className="flex flex-col items-center justify-evenly mt-2 space-y-8 py-4 space-x-0 xl:space-x-4 xl:space-y-0 xl:flex-row">
            <FormDate
              label={"Issue Date"}
              htmlFor="issueDate"
              id="issueDate"
              name="issueDate"
              className="border border-black rounded px-3 py-2 w-full text-xl"
              required={true}
              value={issueDate}
            />
            <FormDate
              label={"Expiry Date"}
              id="expiryDate"
              name="expiryDate"
              className="border border-black rounded px-3 py-2 w-full text-xl"
              required={false}
              value={expiryDate}
            />
          </div>
        </div>
      </section>

      {/* id no and resident permit no */}
      <section className="flex flex-col items-center py-4 justify-between space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
        <FormInputTwo
          htmlFor="IDNo"
          label="Identification Document Number"
          required={true}
          type="text"
          name="IDNo"
          value={IDNo}
        />
        <FormInputTwo
          htmlFor="resPermitNo"
          label="Resident Permit Number (if non-Nigerian)"
          required={false}
          type="text"
          name="resPermitNo"
          value={resPermitNo}
        />
      </section>
      <section className="flex flex-col items-center py-4 justify-between space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
        <FormInputTwo
          htmlFor="stateOfOrigin"
          label="State of Origin"
          required={true}
          type="text"
          name="stateOfOrigin"
          value={stateOfOrigin}
        />
        <FormInputTwo
          htmlFor="resAddress"
          label="Residential Address"
          required={true}
          type="text"
          name="resAddress"
          value={resAddress}
        />
      </section>
      <section className="flex flex-col items-center py-4 justify-between space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
        <FormInputTwo
          htmlFor="workAddress"
          label="Work Address (if applicable)"
          required={false}
          type="text"
          name="workAddress"
          value={workAddress}
        />
        <FormInputTwo
          htmlFor="phoneNos"
          label="Phone Number(s)"
          required={true}
          type="text"
          name="phoneNos"
          value={phoneNos}
        />
      </section>
      <section className="flex flex-col items-center py-4 justify-between space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
        <FormInputTwo
          htmlFor="email"
          label="Email"
          required={true}
          type="email"
          name="email"
          value={email}
        />
        <FormInputTwo
          htmlFor="taxID"
          label="Tax Identification Number"
          required={false}
          type="text"
          name="taxID"
          value={taxID}
        />
      </section>
      <section className="flex flex-col items-center py-4 justify-between space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
        <FormInputTwo
          htmlFor="posHeld"
          label="Position Held (e.g Accountant, Banker, et.c)"
          required={true}
          type="posHeld"
          name="posHeld"
          value={posHeld}
        />
        <FormInputTwo
          htmlFor="employerName"
          label="Name of employer Organization/Employer"
          required={true}
          type="text"
          name="employerName"
          value={employerName}
        />
      </section>

      <section className="flex flex-col items-center py-4 justify-between space-x-0 md:space-x-10 xl:space-x-14 md:flex-row">
        <FormDate
          label={"Date of Birth"}
          htmlFor="DOB"
          id="DOB"
          name="DOB"
          required={true}
          cl={true}
          value={DOB}
        />
        <FormSelectTwo
          options={nationalities}
          name="nationality"
          value={nationality}
          label="Nationality"
          required={true}
          mode={"nationality"}
        />
        <FormSelectTwo
          options={occupations}
          name="occupation"
          value={occupation}
          label="Occupation"
          required={true}
          mode={"occupation"}
        />
      </section>
    </section>
  );
};

export default InputDetails;
