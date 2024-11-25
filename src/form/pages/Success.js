import React, { useEffect } from "react";
import { GrStatusGood } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useFormCtx } from "../context/formContext/formContext";
import { clearLocalStorage } from "../utils/utilFn";
import Header from "../components/header/Header";
import { useIndieCtx } from "../context/formContext/IndieFormContext";
import { useSoleCtx } from "../context/formContext/soleContext";

const Success = () => {
  const { resetState } = useFormCtx();
  const { indieResetState } = useIndieCtx();
  const { soleResetState } = useSoleCtx();

  useEffect(() => {
    clearLocalStorage();
    resetState();
    indieResetState();
    soleResetState();
    localStorage.clear();
  });

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 w-full h-screen relative">
      <div className="absolute top-8 left-10 z-10">
        <Header page="home" />
      </div>
      {/* img */}
      <div className="relative bg-onboarding bg-no-repeat bg-cover w-full h-full col-span-2">
        <div className="absolute h-full w-full bg-black backdrop-filter backdrop-blur">
          <div className="z-50 h-full flex flex-col justify-center items-center">
            <div className="text-white text-3xl md:text-5xl lg:text-6xl">
              <GrStatusGood className="h-44 md:h-64 lg:h-80 w-44 md:w-64 lg:w-80" />
            </div>

            <p className="max-w-xl font-bold text-center text-white py-4 capitalize">
              Dear Client, you have completed your onboarding form and it will
              be reviewed by our compliance team. You will be contacted about
              the status of your application after the review. Thank you.
              <span className="relative bottom-[0.5px]">👍</span>
            </p>

            <div className=" justify-center items-center flex flex-col space-y-4 md:hidden">
              <Link
                to="https://vas2nets.com/"
                className="text-white bg-red-600 rounded-full px-8 py-2 capitalize text-xl tracking-widest  hover:bg-red-900"
              >
                visit website
              </Link>
              <Link
                to="/kycform"
                className="text-white bg-red-600 rounded-full px-8 py-2 capitalize text-xl tracking-widest hover:bg-red-900"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-600 hidden z-50 justify-center items-center space-x-0 md:space-x-4 md:flex">
        <Link
          to="https://vas2nets.com/"
          className="text-red-600 bg-white rounded-full px-8 py-2 capitalize text-xl tracking-widest hover:bg-red-900"
        >
          visit website
        </Link>
        <Link
          to="/kycform"
          className="text-red-600 bg-white rounded-full px-8 py-2 capitalize text-xl tracking-widest hover:bg-red-900"
        >
          Home
        </Link>
      </div>
    </section>
  );
};

export default Success;
