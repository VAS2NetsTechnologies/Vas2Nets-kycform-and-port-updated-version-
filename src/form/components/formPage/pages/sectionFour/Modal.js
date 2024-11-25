import React from "react";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-600">&times;</button>
        </div>
        <div>{children}</div>
        <button
          onClick={onClose}
          className="bg-red-600 text-white py-2 px-4 mt-4 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
