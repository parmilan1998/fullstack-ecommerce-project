import React from "react";

const RoundedButton = ({ icon }) => {
  return (
    <div className="bg-black p-2 rounded-full text-white text-lg">{icon}</div>
  );
};

export default RoundedButton;
