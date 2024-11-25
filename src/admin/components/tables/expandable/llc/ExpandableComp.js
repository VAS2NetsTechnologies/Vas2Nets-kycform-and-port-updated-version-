import React from "react";

const ExpandableComp = (props) => {
  const { data } = props;

  const filteredData = Object.entries(data).filter(
    ([key]) =>
      ![
        "questionnaires",
        "board_member_details",
        "beneficiary_details",
        "signatory_details",
        "user_id",
        "id",
      ].includes(key)
  );

  return (
    <div className="grid grid-cols-2 gap-4 border border-gray-300 rounded-md p-4">
      {filteredData.map(([key, value]) => (
        <div key={key} className="flex items-center">
          <span className="font-semibold">{key}:</span>
          <span className="ml-2">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default ExpandableComp;
