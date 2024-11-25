import React from "react";
import { MdOutlineCorporateFare } from "react-icons/md";
import Heading from "../../../../utils/Heading";
import { FormInput, FormSelect } from "../../../../custom";
import { useFormCtx } from "../../../../../context/formContext/formContext";
import { llc } from "../../../../../utils/entity";
import { nob } from "../../../../../utils/natureOfBusiness";
import { regulators } from "../../../../../utils/regulators";

const CoporateInfo = () => {
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
    <section>
      <div className="heading flex items-center space-x-2">
        <MdOutlineCorporateFare className="text-2xl text-red-600 font-bold" />
        <Heading text="COMPANY INFORMATION" />
      </div>

      <section className="inputs py-6 px-10">
        <div className="wrapper w-full">
          <section className="names ">
            <div className="flex flex-col items-center w-full space-y-4 md:space-y-0 md:space-x-14 md:flex-row">
              <FormInput
                htmlFor="legalName"
                label="Company Legal Name"
                required={true}
                type="text"
                name="legalName"
                value={legalName}
              />

              <FormInput
                htmlFor="tradeName"
                label="Company Trade Name (If different from legal name)"
                type="text"
                name="tradeName"
                value={tradeName}
                relative="relative"
                required={false}
              />
            </div>

            <div className="flex flex-col items-center w-full space-y-4 py-4 md:space-y-0 md:space-x-14 md:flex-row">
              <FormSelect
                options={llc}
                name="typeOfInc"
                value={typeOfInc}
                label="Type of Incorporation (Plc, Ltd & so on)"
                required={true}
                mode="entity"
              />

              <FormInput
                htmlFor="countryOfReg"
                label="Country of Registration/Incorporation"
                type="text"
                name="countryOfReg"
                value={countryOfReg}
                relative="relative"
                required={true}
              />
            </div>

            <div className="flex flex-col items-center w-full space-y-4 py-4 md:space-y-0 md:space-x-14 md:flex-row">
              <FormInput
                htmlFor="regAddress"
                label="Legal or Registered Address"
                required={true}
                type="text"
                name="regAddress"
                value={regAddress}
              />

              <FormInput
                htmlFor="primaryBusAddress"
                label="Primary Business Address (if different from Legal Address)"
                type="text"
                name="primaryBusAddress"
                value={primaryBusAddress}
                relative="relative"
                required={false}
              />
            </div>
          </section>

          <section className="reg-no__dob__reg ">
            <div className="flex flex-col items-center w-full space-y-4 py-4 md:space-y-0 md:space-x-14 md:flex-row">
              <FormInput
                htmlFor="dateOfInc"
                label="Date of Incorporation"
                required={true}
                type="date"
                name="dateOfInc"
                value={dateOfInc}
              />

              <FormInput
                htmlFor="countryRegNo"
                label="Company Registration Number"
                type="text"
                name="countryRegNo"
                value={countryRegNo}
                relative="relative"
                required={true}
              />
            </div>
          </section>

          <section className="py-4">
            <div className="flex flex-col items-center w-full space-y-4 py-4 md:space-y-0 md:space-x-14 md:flex-row">
              <FormInput
                htmlFor="phoneNos"
                label="Company Phone Number(s)"
                required={true}
                type="text"
                name="phoneNos"
                value={phoneNos}
              />

              <FormInput
                htmlFor="email"
                label="Company Email"
                type="email"
                name="email"
                value={email}
                relative="relative"
                required={true}
              />
            </div>
          </section>

          <section className="py-6">
            <div className="flex flex-col items-center w-full space-y-4 py-4 md:space-y-0 md:space-x-14 md:flex-row">
              <FormInput
                htmlFor="websiteURL"
                label="Company Website URL"
                required={true}
                type="text"
                name="websiteURL"
                value={websiteURL}
              />

              <FormSelect
                options={nob}
                name="natureOfBusiness"
                value={natureOfBusiness}
                label="Type/Nature of Business and industry it belongs to"
                required={true}
                mode="nob"
              />
            </div>
          </section>

          <section className="py-4">
            <div className="flex flex-col items-center w-full space-y-4 py-4 md:space-y-0 md:space-x-14 md:flex-row">
              <FormSelect
                options={regulators}
                name="industryReg"
                value={industryReg}
                label="Select your Industry Regulator"
                required={true}
                mode="reg"
              />

              <FormInput
                htmlFor="noOfEmployees"
                label="Number of Company Employees"
                type="number"
                name="noOfEmployees"
                value={noOfEmployees}
                relative="relative"
                required={true}
              />
            </div>
          </section>

          <section>
            <FormInput
              htmlFor="taxIDNo"
              label="Tax Identification Number"
              required={true}
              type="text"
              name="taxIDNo"
              value={taxIDNo}
              width="w-1/2"
            />
          </section>
        </div>
      </section>
    </section>
  );
};

export default CoporateInfo;
