import React from "react";
import NinInput from "./NinInput";
import NinTable from "./NinTable";

const NinComp = () => {
  return (
    <>
      <section className="bg-white px-4 py-8 my-4 rounded-md shadow-md">
        <NinInput />
      </section>
      <section className="bg-white px-4 py-8 my-4 rounded-md shadow-md">
        <NinTable />
      </section>
    </>
  );
};

export default NinComp;
