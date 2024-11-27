import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-10">
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black bg-opacity-50 cursor-pointer"
      ></div>
      <motion.div
        className="bg-white rounded-lg p-6 max-w-md w-full relative"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <button
          className="absolute top-2 bg-white border-none text-xl right-2 text-red-600 cursor-pointer hover:text-red-800"
          onClick={closeModal}
        >
          <FaTimes />
        </button>
        <h2 className="text-xl font-bold mb-4 font-poet tracking-widest text-red-600">
          Select Organization Type
        </h2>
        <div className="flex flex-col space-y-4">
          <Link
            to="/kycform/llc"
            className="bg-red-600 text-white py-2 text-center tracking-wider px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300 font-poet md:py-4 text-xl"
          >
            Limited Liability Company(LLC)
          </Link>
          <Link
            to="/kycform/sole-proprietorship"
            className="bg-red-600 text-white py-2 text-center px-4 rounded-lg tracking-wider shadow-md hover:bg-red-700 transition duration-300 font-poet md:py-4 text-xl"
          >
            Sole Proprietorship
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
