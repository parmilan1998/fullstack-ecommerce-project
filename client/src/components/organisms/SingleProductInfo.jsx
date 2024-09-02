import React from "react";
import RatingStar from "../molecules/RatingStar";
import ProductColors from "./ProductColors";
import ProductSize from "./ProductSize";
import ProductButton from "../atoms/ProductButton";
import CardButton from "../atoms/CardButton";
import { FaRegHeart } from "react-icons/fa";
import DeliveryInfo from "./DeliveryInfo";

const SingleProductInfo = ({ product }) => {
  return (
    <div className="py-3 mx-4 md:mx-8 font-poppins">
      <div className=" space-y-2">
        <h1 className="font-bold text-xl tracking-wide">
          {product.productName}
        </h1>
        <div className="flex space-x-2">
          <div>
            <RatingStar />
          </div>
          <div>
            <span>(150 Reviews)</span>
          </div>
          <div>
            <span className=" text-green-500">
              {product.productStocks > 0 ? (
                <span className="text-green-500">In Stock</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </span>
          </div>
        </div>
        <div>
          <span>${product.discountPrice}</span>
        </div>
        <div>
          <p className="text-sm leading-6">{product.productDescription}</p>
        </div>
        <hr className="my-2 font-medium" />
        <ProductColors />
        <ProductSize />
        <div className="flex items-center space-x-2 py-3">
          <div className="inline-flex overflow-hidden rounded">
            <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap bg-white px-5 text-2xl font-normal tracking-wide text-black transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed hover:text-white border border-gray-400 rounded-l disabled:border-gray-400 disabled:bg-emerald-300 disabled:shadow-none">
              <span>-</span>
            </button>
            <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap bg-white px-5 text-sm font-medium tracking-wide transition duration-300 hover:bg-white focus:bg-white focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 border border-gray-400 text-black disabled:bg-emerald-300 disabled:shadow-none">
              <span>2</span>
            </button>
            <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap bg-white px-5 text-2xl font-normal tracking-wide text-black transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed hover:text-white border border-gray-400 rounded-r disabled:border-gray-400 disabled:bg-emerald-300 disabled:shadow-none">
              <span>+</span>
            </button>
          </div>
          <div>
            <ProductButton name="But Now" />
          </div>
          <div>
            <CardButton name={<FaRegHeart />} />
          </div>
        </div>
        <DeliveryInfo />
      </div>
    </div>
  );
};

export default SingleProductInfo;
