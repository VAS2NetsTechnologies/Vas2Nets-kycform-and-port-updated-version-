import React from "react";
import NinComp from "../components/nin/NinComp";

const Nin = () => {
  return (
    <section className="px-8 py-10">
      <div className="rounded-md py-4 px-6">
        <h1 className="font-bold uppercase text-xl text-red-500">
          validate nin
        </h1>

        <NinComp />
      </div>
    </section>
  );
};

export default Nin;
