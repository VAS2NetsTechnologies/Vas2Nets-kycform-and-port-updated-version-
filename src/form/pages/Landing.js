import React, { useState } from "react";
import { FaAngleDoubleDown, FaAngleDown } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { motion } from "framer-motion";
import Logo from "../../assets/VAS2Nets-Logo.png";
import { Link } from "react-router-dom";
import Modal from "../components/modal/Modal";
import { FaAngleUp } from "react-icons/fa6";
import kyclogo from "../../assets/kyc_2.jpeg"

const Landing = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen w-full"
    >
      <img
        src={kyclogo}
        alt="logo"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="absolute top-4 left-4">
          <img
            src={Logo}
            alt="logo"
            className="h-auto max-h-24 w-auto max-w-40 font-bold"
          />
        </div>
        <p className="text-center max-w-md text-gray-200 text-2xl font-bold font-poet subpixel-antialiased italic md:max-w-2xl md:text-3xl my-6">
          We value you and your information!
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h3 className="capitalize text-white py-6 px-4 rounded-lg text-lg flex items-center font-bold font-poet italic md:text-xl bg-gray-900 bg-opacity-75 shadow-lg">
            <span>Choose category to be Onboarded on VAS2Nets Platform</span>
            <motion.span
              animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="ml-2"
            >
              ⬇️
            </motion.span>
          </h3>
        </motion.div>
        <button
          onClick={toggleModal}
          className="bg-red-800 hover:bg-red-600 text-white py-3 px-3 text-lg rounded-2xl md:text-xl capitalize border-none flex items-center space-x-4 cursor-pointer"
        >
          <span className="tracking-wider font-bold font-poet text-xl">
            organization
          </span>
          <span>
            {showModal ? (
              <FaAngleUp className="text-lg" />
            ) : (
              <FaAngleDown className="text-lg" />
            )}
          </span>
        </button>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <Modal closeModal={toggleModal} />
          </div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex justify-between py-8 space-x-10 xl:space-x-0"
        >
          <div className="flex flex-row items-center justify-center space-x-10">
            <Link
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              to="/kycform/individual"
              className="bg-red-600  hover:bg-red-400 text-white py-3 px-3 text-lg rounded-2xl md:text-xl capitalize border-none flex items-center space-x-4 cursor-pointer"
            >
              <span className="tracking-wider font-bold font-poet text-xl">
                individual
              </span>
              <span>
                <IoMdPerson className="text-lg" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Landing;
