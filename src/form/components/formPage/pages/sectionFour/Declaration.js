import React from "react";
import Signatories from "./Signatories";
import { TfiWrite } from "react-icons/tfi";

const Declaration = () => {
  return (
    <main className="bg-black px-8 py-6 rounded shadow-md ">
      <section className="declaration text-white font-bold">
        <header>
          <h1 className="text-3xl py-8 flex items-center space-x-4 ">
            <span>Declaration </span>
            <span>
              <TfiWrite />
            </span>
          </h1>
          <p className="text-lg">
            I/We hereby confirm that, the information declared on this form is
            current, accurate, and reflects our company's Anti-Money Laundering
            and CTF Policies. We acknowledge and certify that we are aware of
            and comply with all Anti-Money Laundering regulations and
            requirements in our country or countries of operation.
          </p>
        </header>

        <section className="signatories px-10">
          <Signatories />
        </section>
      </section>
    </main>
  );
};

export default Declaration;
