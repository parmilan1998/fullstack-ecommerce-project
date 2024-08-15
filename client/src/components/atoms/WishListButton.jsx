import React from "react";
import { FaRegHeart } from "react-icons/fa";

const WishListButton = () => {
  return (
    <div className="p-2 w-8 m-2 flex justify-center items-center rounded-full bg-white  text-black">
      <FaRegHeart />
    </div>
  );
};

export default WishListButton;
