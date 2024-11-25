import React, { useState } from "react";
import { FaAngleDoubleDown, FaAngleDown } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { motion } from "framer-motion";
import Logo from "../../assets/VAS2Nets-Logo.png";
import { Link } from "react-router-dom";
import Modal from "../components/modal/Modal";
import { FaAngleUp } from "react-icons/fa6";

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
      className="bg-loginBg h-screen bg-cover bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="hidden justify-end px-4 py-6 md:flex relative">
        <img
          src={Logo}
          alt="logo"
          className="h-auto max-h-20 w-auto max-w-38"
        />
      </div>
      <div className="flex md:hidden relative">
        <img
          src={Logo}
          alt="logo"
          className="h-auto max-h-14 w-auto max-w-30 m-8 xl:"
        />
      </div>

      <motion.section
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col jusitfy-center items-center px-10 md:px-4 relative"
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="px-10 md:px-4"
        >
          <h1 className="bg-red-600 text-white text-center rounded-md py-4 px-3 text-xl subpixel-antialiased xl:text-5xl">
            VAS2Nets Onboarding Form
          </h1>
          <p className="text-center max-w-sm text-white text-lg font-poet subpixel-antialiased italic tracking-wider md:max-w-xl md:text-3xl">
            Reaching beyond the limits of your capabilities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h3 className="capitalize bg-red-600/70 text-white py-6 px-4 rounded-lg text-sm tracking-widest flex items-center space-x-8 font-poet shadow-lg md:text-lg">
            <span> Choose category for your kyc</span>
            <motion.span
              animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaAngleDoubleDown />
            </motion.span>
          </h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex justify-between py-8 space-x-10 xl:space-x-0"
          >
            <button
              onClick={toggleModal}
              className="bg-red-600 text-white py-6 px-3 text-lg md:text-xl capitalize border-none flex items-center space-x-4 cursor-pointer"
            >
              <span className="tracking-wider font-bold font-poet">
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
            {showModal && <Modal closeModal={toggleModal} />}
            <Link
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              to="/kycform/individual"
              className="bg-red-600 text-white py-6 px-3 text-lg md:text-xl capitalize border-none flex items-center space-x-4 cursor-pointer"
            >
              <span className="tracking-wider font-bold font-poet">
                individual
              </span>
              <span>
                <IoMdPerson className="text-lg" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.section>
  );
};

export default Landing;
