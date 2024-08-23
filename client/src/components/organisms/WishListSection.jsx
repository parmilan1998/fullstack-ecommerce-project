import React, { useState } from "react";
import { Link } from "react-router-dom";
import CoatImage from "../../assets/coat.png";
import BagImage from "../../assets/bag.png";
import CoolerImage from "../../assets/cooler.png";
import BookselfImage from "../../assets/bookself.png";
import ProductCard from "./ProductCard";

const WishListSection = () => {
  const wishlistProductsInfo = [
    {
      id: 1,
      image: CoatImage,
      productName: "The north coat",
      price: "$360",
      discountPice: "$260",
      ratingCount: "65",
    },
    {
      id: 2,
      image: BagImage,
      productName: "Gucci duffle bag",
      price: "$1160",
      discountPice: "$960",
      ratingCount: "75",
    },
    {
      id: 3,
      image: CoolerImage,
      productName: "RGB liquid CPU Cooler",
      price: "$170",
      discountPice: "$160",
      ratingCount: "65",
    },
    {
      id: 4,
      image: BookselfImage,
      productName: "Small BookSelf",
      price: "$400",
      discountPice: "$360",
      ratingCount: "65",
    },
  ];
  const [wishListItems, setWishListItems] = useState([]);

  return (
    <div className="wishlist-section font-poppins py-4">
      <div className="flex justify-between items-center py-4">
        <h2 className="text-xl font-bold tracking-wider">
          Wishlist(8)
          {/* ({wishListItems.length}) */}
        </h2>
        <Link to="/" className="inline-block text-blue-500 hover:underline">
          Back to Products
        </Link>
      </div>
      {/* {wishListItems.length === 0 ? (
        <p className="text-center py-12 text-red-500">
          Your wishlist is empty.
        </p>
      ) : ( */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
        {/* {wishListItems.map((item) => ( */}
        {wishlistProductsInfo.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
        {/* ))} */}
      </div>
      {/* )} */}
    </div>
  );
};

export default WishListSection;
