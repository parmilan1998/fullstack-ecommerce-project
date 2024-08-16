import React from "react";

const BrowseByCategoryCard = ({ image, name }) => {
  return (
    <div className="bg-gray-100 hover:bg-blue-500 hover:text-white rounded ease-in duration-200 font-poppins w-48 h-48 flex flex-col mx-auto justify-center items-center">
      <img src={image} alt={name} className="object-contain" />
      <h1 className="mt-2 text-center">{name}</h1>
    </div>
  );
};

export default BrowseByCategoryCard;
