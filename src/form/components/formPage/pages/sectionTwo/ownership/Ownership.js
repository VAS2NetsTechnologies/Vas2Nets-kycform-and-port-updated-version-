import React from "react";

import { WiStrongWind } from "react-icons/wi";
import Owners from "./Owners";
import Heading from "../../../../utils/Heading";

const Ownership = () => {
  return (
    <section className="py-16">
      <div className="heading flex items-center space-x-2">
        <WiStrongWind className="text-2xl text-red-600 font-bold" />
        <Heading text="SHAREHOLDER / GUARANTOR (for GTE) COMPOSITION (ULTIMATE BENEFICIARIES ABOVE 5%)" />
      </div>
      <section className="ownership-questionaire py-4">
          <div className="">
            <Owners />
          </div>
        </section>
    </section>
  );
};

export default Ownership;
