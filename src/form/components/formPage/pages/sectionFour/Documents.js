import React from "react";
import { FormFile } from "../../../custom";

const Documents = () => {
  return (
    <div className="w-full py-10 px-2">
      <div className="incoporation_memorandum flex flex-col justify-center space-y-4 space-x-0 md:space-y-0 md:space-x-6 md:justify-between md:flex-row">
        <FormFile
          label="Upload Certificate of Incorporation"
          name="certificateOfIncorporationDoc"
          required={true}
        />

        <FormFile
          label="Upload PSSP License(for PSSP Client Only)"
          name="PSSPDoc"
          required={false}
        />
      </div>
      <div className="operating-license__aml-policy py-8 flex flex-col justify-center space-y-4 space-x-0 md:space-y-0 md:space-x-6 md:justify-between md:flex-row">
        <FormFile
          label="Upload Statement of share capital CAC 2.4 "
          name="statementShareCap24Doc"
          required={true}
        />
        <FormFile
          label="Upload Most recent AML Audit Report"
          name="amlAuditDoc"
          required={true}
        />
      </div>
      <div className="relevant-license__utility-bill flex flex-col justify-center space-y-6 space-x-0 md:space-y-0 md:space-x-6 md:justify-between md:flex-row">
        <FormFile
          label="Upload evidence of company's business address (i.e. utility bill not more than three (3) months old"
          name="utilityBillDoc"
          required={true}
        />

        <FormFile
          label="Upload Particulars of all Directors - CAC 7A"
          name="dirPart7ADoc"
          required={true}
          small={true}
        />
      </div>

      <div className="relevant-license__utility-bill flex flex-col justify-center py-4 space-y-6 space-x-0 md:space-y-0 md:space-x-6 md:justify-between md:flex-row">
        <FormFile
          label="Upload Return of allotment form - CAC 2A"
          name="returnAllot2ADoc"
          required={true}
        />

        <FormFile
          label=" Upload Audited Financial Statement for the previous year"
          name="auditDoc"
          required={true}
        />
      </div>

      <div className="relevant-license__utility-bill flex flex-col justify-center space-y-6 space-x-0 md:space-y-0 md:space-x-6 md:justify-between md:flex-row">
        <FormFile
          label="Upload Notification of Situation/Change of Registered Address - CAC 3"
          name="notSituationCAC3Doc"
          required={true}
        />
        <FormFile
          label="Upload Memorandum and Articles of Association (or the local equivalent)"
          name="memorandumAndArticlesOfAssociationDoc"
          required={true}
        />
      </div>

      <div className="relevant-license__utility-bill py-4 flex flex-col justify-center space-y-6 space-x-0 md:space-y-0 md:space-x-6 md:justify-between md:flex-row">
        <FormFile
          label="Upload Government issued Proof of Identification (POI) for all Directors"
          name="govPOIDirDoc"
          required={true}
          small={true}
        />
        <FormFile
          label="Upload Valid means of Identification of each Shareholder or UBO"
          name="shareHolderUBODoc"
          required={true}
          small={true}
        />
      </div>

      <div className="directors__audits flex flex-col justify-center space-y-4 space-x-0 md:space-y-0 md:space-x-6 md:justify-between md:flex-row">
        <FormFile
          label="Upload certified list of Shareholders (indicating the Ultimate Beneficial Owners (UBOs). A UBO is an individual that has more than 5% ownership of the company."
          name="UBOsDoc"
          required={true}
          small={true}
        />
      </div>
    </div>
  );
};

export default Documents;
