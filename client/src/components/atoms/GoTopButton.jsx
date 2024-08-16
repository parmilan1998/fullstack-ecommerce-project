import React from "react";
import { FiArrowUp } from "react-icons/fi";

const GoTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className="p-3 rounded-full w-10 bg-gray-200 text-black font-poppins font-bold my-3"
    >
      <FiArrowUp />
    </button>
  );
};

export default GoTopButton;
