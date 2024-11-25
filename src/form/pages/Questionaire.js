import React from "react";

import FormPage from "../components/formPage/FormPage";

const Questionaire = () => {
  return (
    <section className="questionaire py-8 px-4 overflow-none md:overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* form page */}
        <FormPage />
      </div>
    </section>
  );
};

export default Questionaire;
