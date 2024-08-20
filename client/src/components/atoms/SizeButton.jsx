import React from "react";

const SizeButton = ({ id, size, selected, onClick }) => {
  return (
    <button
      className={`px-3 py-1 text-sm rounded  border border-gray-400 ${
        selected ? "bg-blue-500 text-white border-none" : "bg-white text-black"
      }`}
      onClick={() => onClick(id)}
    >
      {size}
    </button>
  );
};

export default SizeButton;
