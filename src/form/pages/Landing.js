import React, { useState } from "react";
import { FaAngleDoubleDown, FaAngleDown } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { motion } from "framer-motion";
import Logo from "../../assets/VAS2Nets-Logo.png";
import { Link } from "react-router-dom";
import Modal from "../components/modal/Modal";
import { FaAngleUp } from "react-icons/fa6";
import kyclogo from "../../assets/KYC.jpg"

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
      className="bg-white h-screen bg-cover bg-no-repeat relative opacity-15 to-transparent"
    >
      <div className="absolute inset-0  opacity-50"></div>
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
          <div className="flex md:flex-row justify-between space-x-10 w-full h-screen m-auto mt-16">
          <div className="left-0 top-0 mx-auto p-3 w-2/3 text-3xl">

{/* <h1 className="bg-red-600 text-white text-center rounded-md py-4 px-3 text-xl subpixel-antialiased xl:text-3xl">
  VAS2Nets Onboarding Form
</h1> */}
<p className="text-center max-w-sm text-gray-500 text-lg font-poet subpixel-antialiased italic  md:max-w-xl md:text-3xl">
  We value you and your information!
</p>
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1, delay: 2 }}
>
<h3 className="capitalize  text-black py-6 px-4 rounded-lg text-sm  flex items-center  font-poet italic md:text-lg">
  <span> Choose category to be Onboarded on VAS2Nets Platform</span>
  <motion.span
    animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <FaAngleDoubleDown />
  </motion.span>
</h3>

</motion.div>
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 2.5 }}
  className="flex justify-between py-8 space-x-10 xl:space-x-0"
>
  <button
    onClick={toggleModal}
    className="bg-red-600 hover:bg-red-400 text-white py-6 px-3 text-lg rounded-2xl md:text-xl capitalize border-none flex items-center space-x-4 cursor-pointer"
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
  {showModal && <Modal closeModal={toggleModal} />}
  <Link
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    to="/kycform/individual"
    className="bg-red-600  hover:bg-red-400 text-white py-6 px-3 text-lg rounded-2xl md:text-xl capitalize border-none flex items-center space-x-4 cursor-pointer"
  >
    <span className="tracking-wider font-bold font-poet text-xl">
      individual
    </span>
    <span>
      <IoMdPerson className="text-lg" />
    </span>
  </Link>
</motion.div>
</div>
<div className="rounded-sm">
  <img className="w-full" src={kyclogo} alt="logo" />
</div>
</div>
        </motion.div>
      </motion.section>
    </motion.section>
  );
};

export default Landing;
