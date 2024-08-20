import React, { useState } from "react";
import Heading from "../atoms/Heading";
import Title from "../atoms/Title";
import ProductButton from "../atoms/ProductButton";
import ProductCard from "../molecules/ProductCard";
import CoatImage from "../../assets/coat.png";
import BagImage from "../../assets/bag.png";
import CoolerImage from "../../assets/cooler.png";
import BookselfImage from "../../assets/bookself.png";
import { Link } from "react-router-dom";

const BestSellingProducts = () => {
  const bestSellingProductsInfo = [
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
  return (
    <div className="py-6">
      <div className="flex justify-between">
        <div>
          <Heading title="This Month" />
          <Title props="Best Selling Products" />
        </div>
        <div className="flex items-center lg:my-6">
          <ProductButton name="View All" />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 py-8">
        {bestSellingProductsInfo.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id}>
            <ProductCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
