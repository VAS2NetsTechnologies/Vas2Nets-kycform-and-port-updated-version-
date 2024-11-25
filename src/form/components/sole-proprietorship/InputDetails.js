import React from "react";
import FormInputThree from "../custom/formInputs/FormInputThree";
import FormDateTwo from "../custom/formDate/FormDateTwo";
import FormSelectThree from "../custom/FormSelect/FormSelectThree";
import { countries } from "../../utils/solePropUtils";
import { useSoleCtx } from "../../context/formContext/soleContext";
import { nob } from "../../utils/natureOfBusiness";

const InputDetails = () => {
  const { businessInfo } = useSoleCtx();

  const {
    busName,
    natureOfBusiness,
    country,
    busAddress,
    busEmail,
    phoneNos,
    nameOfProp,
    addressOfProp,
    taxNo,
    dateOfInc,
    bvn,
    noOfEmployees,
  } = businessInfo[0];

  return (
    <section className="px-10 py-14">
      {/* name on id and means of id */}
      <section className="flex flex-col items-center justify-between space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
        <FormInputThree
          htmlFor="busName"
          label="Business Name (same as on Certificate of Registration of Business Name)"
          required={true}
          type="text"
          name="busName"
          value={busName}
        />
        <FormInputThree
          htmlFor="busAddress"
          label="Address of Business"
          required={true}
          type="text"
          name="busAddress"
          value={busAddress}
        />
      </section>

      <section className="flex flex-col items-center space-y-8 space-x-0 md:space-y-0 md:space-x-4 xl:space-x-10 md:flex-row">
        <FormSelectThree
          options={countries}
          name="country"
          value={country}
          label="Country of Registration/Incorporation"
          required={true}
          mode={"country"}
        />

        <FormSelectThree
          options={nob}
          name="natureOfBusiness"
          value={natureOfBusiness}
          label="Nature of Business"
          required={true}
          mode={"nob"}
        />
      </section>

      {/* id no and resident permit no */}
      <section className="flex flex-col items-center py-4 justify-between space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
        <FormInputThree
          htmlFor="busEmail"
          label="Business Email"
          required={true}
          type="text"
          name="busEmail"
          value={busEmail}
        />
        <FormInputThree
          htmlFor="phoneNos"
          label="Phone Number(s)"
          required={true}
          type="text"
          name="phoneNos"
          value={phoneNos}
        />
      </section>
      <section className="flex flex-col items-center py-4 justify-between space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
        <FormInputThree
          htmlFor="nameOfProp"
          label="Name of Proprietor"
          required={false}
          type="text"
          name="nameOfProp"
          value={nameOfProp}
        />
        <FormInputThree
          htmlFor="addressOfProp"
          label="Address of Proprietor"
          required={false}
          type="text"
          name="addressOfProp"
          value={addressOfProp}
        />
      </section>
      <section className="flex flex-col items-center py-4 justify-between space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
        <FormInputThree
          htmlFor="taxNo"
          label="Tax Identification Number"
          required={true}
          type="text"
          name="taxNo"
          value={taxNo}
        />
        <FormDateTwo
          label={"Date of Incorporation"}
          htmlFor="dateOfInc"
          id="dateOfInc"
          name="dateOfInc"
          cl={false}
          required={true}
          value={dateOfInc}
        />
      </section>
      <section className="flex flex-col items-center py-4 justify-between space-x-0 md:space-x-4 xl:space-x-6 md:flex-row">
        <FormInputThree
          htmlFor="bvn"
          label="BVN"
          required={true}
          type="text"
          name="bvn"
          value={bvn}
        />
        <FormInputThree
          htmlFor="noOfEmployees"
          label="Number of Employee(s)"
          required={true}
          type="number"
          name="noOfEmployees"
          value={noOfEmployees}
        />
      </section>
    </section>
  );
};

export default InputDetails;
