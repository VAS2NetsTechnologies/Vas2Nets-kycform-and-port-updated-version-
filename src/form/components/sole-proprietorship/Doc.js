import React from "react";
import FormFileThree from "../custom/formFile/FormFileThree";
import { IoDocumentSharp } from "react-icons/io5";
import Heading from "../utils/Heading";

const Doc = () => {
  return (
    <section>
      <div className="heading flex items-center space-x-2">
        <IoDocumentSharp className="text-2xl text-red-600 font-bold" />
        <Heading text="Documents" />
      </div>
      <header>
        <h1 className="text-red-600 font-bold py-2 text-xl">
          Maximum size of documents to be uploaded should be 5MB (in PDF & DOCX)
        </h1>
      </header>

      <section>
        <div className="w-full py-10 px-2">
          <div className="incoporation_memorandum flex flex-col justify-center space-y-4 space-x-0 md:space-y-0 md:space-x-6 md:justify-between md:flex-row">
            <FormFileThree
              label="Upload Valid Identification"
              name="validIDDoc"
              required={true}
            />
            <FormFileThree
              label="Upload Proof of Address(for the last three months)"
              name="proofOfAddressDoc"
              required={true}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full py-10 px-2">
          <FormFileThree
            label="Upload Certificate of Registration of Business Name"
            name="cacDoc"
            required={true}
          />
        </div>
      </section>
    </section>
  );
};

export default Doc;
