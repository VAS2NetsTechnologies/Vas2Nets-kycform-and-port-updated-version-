import React from "react";

const Asterisk = ({ required, mode }) => {
  return (
    <span className={`asterisk text-2xl font-bold ${required ? 'text-red-600' : (mode === 'ignore' ? 'text-black' : 'text-white')}`}>*</span>
  );
};

export default Asterisk;
