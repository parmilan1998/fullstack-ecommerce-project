import React from "react";

const Title = ({ props }) => {
  return (
    <div>
      <h1 className="text-2xl mx-3 text-gray-800 font-roboto py-2 font-bold">
        {props}
      </h1>
    </div>
  );
};

export default Title;
