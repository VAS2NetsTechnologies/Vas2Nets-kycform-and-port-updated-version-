import React from "react";
import FormPage from "../formPage/FormPage";
import { FaBusinessTime } from "react-icons/fa6";
import Heading from "../utils/Heading";
import Footer from "../footer/Footer";
import InputDetails from "./InputDetails";
import Handles from "./Handles";
import Questionnaires from "./Questionnaires";
import Doc from "./Doc";
import Declare from "./Declare";

const Forms = ({ loading }) => {
  return (
    <FormPage>
      {/* <section> */}
      <div className="heading flex items-center space-x-2">
        <FaBusinessTime className="text-2xl text-red-600 font-bold" />
        <Heading text="BUSINESS DETAILS" />
      </div>

      <InputDetails />
      <section className="px-2 md:px-8">
        <Handles />
      </section>
      <section className="py-10">
        <Questionnaires />
      </section>
      <section className="px-2 md:px-8">
        <Doc />
      </section>
      <section>
        <Declare />
      </section>

      <div className="flex justify-end py-4 px-6">
        {loading ? (
          <button
            type="button"
            disabled
            className="bg-red-900 py-2 px-6 rounded-md shadow-md text-white capitalize text-xl cursor-not-allowed"
          >
            Submitting...
          </button>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className={`bg-red-600 py-2 px-6 rounded-md shadow-md text-white capitalize text-xl cursor-pointer hover:bg-transparent hover:text-red-600 hover:border-red-600 hover:shadow-xl transition duration-300`}
          >
            Submit
          </button>
        )}
      </div>
      <Footer />
    </FormPage>
  );
};

export default Forms;
