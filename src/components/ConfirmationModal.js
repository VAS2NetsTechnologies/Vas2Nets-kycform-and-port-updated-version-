import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, X } from "lucide-react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

const modalVariants = {
  hidden: {
    scale: 0.95,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={backdropVariants}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden bg-white rounded-2xl shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Modal Content */}
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Confirm Submission
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Please review your information
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Before proceeding, please ensure that all the information you've
                provided is accurate and complete.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium text-sm"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="flex-1 px-4 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm shadow-lg shadow-indigo-200 cursor-pointer"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ConfirmationModal;
