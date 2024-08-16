import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="flex justify-start w-48 gap-2 py-2 items-center mx-3 font-poppins">
      <div className="py-3 px-1 bg-blue-600 rounded"></div>
      <h1 className="flex text-sm font-medium text-blue-500">{title}</h1>
    </div>
  );
};

export default Heading;
