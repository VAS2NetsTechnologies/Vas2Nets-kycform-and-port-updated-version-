import React from "react";

const FormPage = ({ children }) => {
  return (
    <section className="bg-white backdrop-filter backdrop-blur shadow-xl rounded-xl py-8 px-2 mx-auto overflow-none md:overflow-hidden lg:px-10 xl:px-4">
    <div className="wrapper">{children}</div>
  </section>
  
  );
};

export default FormPage;
