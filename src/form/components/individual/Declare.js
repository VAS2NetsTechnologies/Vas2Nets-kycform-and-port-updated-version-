import React from "react";
import { TfiWrite } from "react-icons/tfi";
import IndieSign from "./IndieSign";

const Declare = () => {
  return (
    <main className=" w-full">
      <section className="declaration text-white font-bold px-10 py-6 bg-black">
        <header>
          <h1 className="text-3xl py-8 flex items-center space-x-4 ">
            <span>Declaration </span>
            <span>
              <TfiWrite />
            </span>
          </h1>
          <p className="text-lg">
            I hereby confirm that the information declared on this form is
            current and accurate.
          </p>
        </header>

        <section className="signatories px-10">
          <IndieSign />
        </section>
      </section>
    </main>
  );
};

export default Declare;
