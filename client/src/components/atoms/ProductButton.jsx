import React from "react";

const ProductButton = ({ name }) => {
  return (
    <button className="px-6 py-2 bg-blue-500 text-white font-poppins hover:bg-blue-900 rounded ease-in duration-200">
      {name}
    </button>
  );
};

export default ProductButton;
