import React from "react";
import { FormInput } from "../../../custom";
import { useFormCtx } from "../../../../context/formContext/formContext";

const Signatories = () => {
  const { coporateInfo } = useFormCtx();
  const {
    authorizedSignatory1,
    authorizedSignatory2,
    designation1,
    designation2,
    signatoryDate,
    nameOfDeclarator,
    declaratorPosition,
    declaratorDate,
  } = coporateInfo[0];

  return (
    <section>
      <div className="signatory py-10 px-10 md:px-2">
        <div className="authorized-signatory">
          <div className="flex flex-col items-center w-full space-x-0 space-y-6 md:space-y-0 md:space-x-20 md:flex-row">
            <FormInput
              htmlFor="authorizedSignatory1"
              label="Name of the Authorized Signatory (1)"
              required={true}
              type="text"
              name="authorizedSignatory1"
              value={authorizedSignatory1}
              width="w-full"
              inputColor="text-white"
            />
            <FormInput
              htmlFor="authorizedSignatory2"
              label="Name of the Authorized Signatory (2)"
              required={true}
              type="text"
              name="authorizedSignatory2"
              value={authorizedSignatory2}
              width="w-full"
              inputColor="text-black"
            />
          </div>
          <div className="flex flex-col items-center py-10 w-full space-x-0 space-y-6 md:space-y-0 md:space-x-20 md:flex-row">
            <FormInput
              htmlFor="designation1"
              label="Designation/Title(1)"
              required={true}
              type="text"
              name="designation1"
              value={designation1}
              width="w-full"
              inputColor="text-black"
            />
            <FormInput
              htmlFor="designation2"
              label="Designation/Title (2)"
              required={true}
              type="text"
              name="designation2"
              value={designation2}
              width="w-full"
              inputColor="text-black"
            />
            <FormInput
              htmlFor="signatoryDate"
              label="Date"
              required={true}
              type="date"
              name="signatoryDate"
              value={signatoryDate}
              width="w-full"
              inputColor="text-black"
            />
          </div>
          {/* confirm signatories */}
          <hr className="border border-dotted " />

          <div className="flex justify-center items-center pt-8">
            <p>
              I hereby certify that the information provided is true and
              accurate and I agree that VAS2Nets reserves the right to take
              appropriate measures including legal actions if the information
              here is discovered to be false.
            </p>
          </div>
          <div className="flex flex-col items-center w-full space-x-0 space-y-6 md:space-y-0 md:space-x-20 md:flex-row py-10">
            <FormInput
              htmlFor="nameOfDeclarator"
              label="Name"
              required={true}
              type="text"
              name="nameOfDeclarator"
              value={nameOfDeclarator}
              width="w-full"
              inputColor="text-black"
            />
            <FormInput
              htmlFor="declaratorPosition"
              label="Position In The Company"
              required={true}
              type="text"
              name="declaratorPosition"
              value={declaratorPosition}
              width="w-full"
              inputColor="text-black"
            />
            <FormInput
              htmlFor="declaratorDate"
              label="Date"
              required={true}
              type="date"
              name="declaratorDate"
              value={declaratorDate}
              width="w-full"
              inputColor="text-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signatories;
