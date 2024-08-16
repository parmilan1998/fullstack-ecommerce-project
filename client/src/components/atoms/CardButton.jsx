import React from "react";

const WishListButton = ({ onClick, name }) => {
  return (
    <div
      onClick={onClick}
      className="p-2 w-8 m-2 flex justify-center items-center rounded-full bg-white text-black"
    >
      {name}
    </div>
  );
};

export default WishListButton;
