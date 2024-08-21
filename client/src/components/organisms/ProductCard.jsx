import React, { useState } from "react";
import CardButton from "../atoms/CardButton";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import RatingStar from "../molecules/RatingStar";

const ProductCard = ({
  id,
  image,
  productName,
  price,
  discountPice,
  ratingCount,
}) => {
  const [visible, setVisible] = useState(false);

  const handleWishListClick = () => {
    console.log("Add Wishlist");
  };

  return (
    <div
      className="font-poppins mx-auto"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="bg-slate-200 relative flex flex-col rounded justify-center w-64 h-56">
        <div className="top-2 right-0 absolute cursor-pointer">
          <CardButton onClick={handleWishListClick} name={<FaRegHeart />} />
          <CardButton name={<HiOutlineEye />} />
        </div>
        <div className=" flex-grow flex items-center">
          <img src={image} alt="Product" className="object-cover mx-auto" />
        </div>
        <div>
          {visible && (
            <button className="w-full bg-black py-1.5 rounded-b text-white flex justify-center items-end text-center">
              Add To Cart
            </button>
          )}
        </div>
      </div>
      <div className=" space-y-2 font-medium py-2">
        <h1>{productName}</h1>
        <div className="flex gap-2">
          <span className=" text-red-500">{discountPice}</span>
          <span className=" line-through text-gray-400">{price}</span>
        </div>
        <div className="flex gap-2">
          <RatingStar />
          {ratingCount && (
            <span className="text-sm text-gray-400">({ratingCount})</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
