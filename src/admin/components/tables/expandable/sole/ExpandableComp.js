import React from "react";
import { motion } from "framer-motion";

const ExpandableComp = (props) => {
  const { data } = props;

  // Filter out unwanted keys
  const filteredData = Object.entries(data || {}).filter(
    ([key]) =>
      !["id", "pepStatus", "questionnaires", "socialMedias"].includes(key)
  );

  // Utility function to render the value
  const renderValue = (value) => {
    if (Array.isArray(value)) {
      // If it's an array, map and render its items
      return value.map((item, index) => (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          key={index} 
          className="ml-2 text-gray-700 text-sm"
        >
          {typeof item === "object" ? (
            Object.entries(item).map(([subKey, subValue]) => (
              <div key={subKey} className="py-1">
                <span className="font-semibold text-gray-800">{subKey}:</span> {subValue || "N/A"}
              </div>
            ))
          ) : (
            item || "N/A"
          )}
        </motion.div>
      ));
    } else if (typeof value === "object" && value !== null) {
      // If it's a non-array object, render its keys and values
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="ml-2 text-gray-700 text-sm"
        >
          {Object.entries(value).map(([subKey, subValue]) => (
            <div key={subKey} className="py-1">
              <span className="font-semibold text-gray-800">{subKey}:</span> {subValue || "N/A"}
            </div>
          ))}
        </motion.div>
      );
    } else if (value === null || value === undefined || value === "") {
      // Handle empty or null values gracefully
      return "N/A";
    }
    // Render primitive values directly
    return value;
  };

  // If no valid data is available
  if (filteredData.length === 0) {
    return (
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-500 p-4"
      >
        No other details for this client.
      </motion.p>
    );
  }

  return (
    <div className="overflow-x-auto pb-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-w-full grid grid-cols-2 gap-6 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm border border-gray-200"
        style={{ minWidth: '600px' }}
      >
        {filteredData.map(([key, value], index) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            key={key} 
            className="flex flex-col p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <span className="font-semibold capitalize text-gray-900 mb-2 text-sm">
              {key.replace(/_/g, " ")}:
            </span>
            <div className="text-gray-600">
              {renderValue(value)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExpandableComp;