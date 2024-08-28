import React, { useState } from "react";
import CardButton from "../atoms/CardButton";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi";
import RatingStar from "../molecules/RatingStar";
import { useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const ProductCard = ({
  _id,
  image,
  productName,
  productPrice,
  discountPice,
  ratingCount,
}) => {
  const location = useLocation();
  const isWishlist = location.pathname === "/wishlist";
  const [visible, setVisible] = useState(isWishlist);

  const handleWishListClick = () => {
    console.log("Add Wishlist");
  };

  return (
    <div
      className="font-poppins mx-auto"
      onMouseEnter={() => !isWishlist && setVisible(true)}
      onMouseLeave={() => !isWishlist && setVisible(false)}
    >
      <div className="bg-slate-200 relative flex flex-col rounded justify-center w-64 h-56">
        <div className="top-2 right-0 absolute cursor-pointer">
          {!isWishlist ? (
            <>
              <CardButton onClick={handleWishListClick} name={<FaRegHeart />} />
              <CardButton name={<HiOutlineEye />} />
            </>
          ) : (
            <CardButton name={<MdDelete color="red" />} />
          )}
        </div>
        <div className=" flex-grow flex items-center">
          <img
            src={image}
            alt="Product"
            className="bg-cover w-64 h-56 object-fill  rounded mx-auto"
          />
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
          <span className=" line-through text-gray-400">${productPrice}</span>
        </div>
        <div className="flex gap-2">
          <RatingStar />
          <span className="text-sm text-gray-400">{ratingCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
