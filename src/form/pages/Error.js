import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="py-14">
      <div className="title text-center flex items-center justify-center flex-col">
        <h1 className="text-[10rem] text-red-600">404</h1>
        <h1 className="text-4xl font-bold text-red-600 max-w-xl">oops!</h1>
        <p className="max-w-4xl py-8">
          seems like you lost your way but don't wory, you will never get lost
          with us, use click the button blow too find your way back to where you
          belong
        </p>
        <Link
          to="/kycform"
          className="bg-red-600 text-white rounded-full py-2 px-6 capitalize cursor-pointer"
        >
          begin
        </Link>
      </div>
    </main>
  );
};

export default Error;
