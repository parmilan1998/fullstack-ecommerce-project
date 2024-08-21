import React from "react";
import Heading from "../molecules/Heading";
import Title from "../atoms/Title";
import PlayImage from "../../assets/play.png";
import keyBoardImage from "../../assets/keyboard.png";
import televisionImage from "../../assets/television.png";
import chairImage from "../../assets/chair.png";
import ProductButton from "../atoms/ProductButton";
import { Link } from "react-router-dom";
import ProductCard from "../organisms/ProductCard";

const HomeSection_02 = () => {
  const flashSalesInfo = [
    {
      id: 1,
      image: PlayImage,
      productName: "HAVIT HV-G92 Gamepad",
      price: "$120",
      discountPice: "$160",
      ratingCount: "88",
    },
    {
      id: 2,
      image: keyBoardImage,
      productName: "AK-900 Wired Keyboard",
      price: "$960",
      discountPice: "$1160",
      ratingCount: "75",
    },
    {
      id: 3,
      image: televisionImage,
      productName: "IPS LCD Gaming Monitor",
      price: "$370",
      discountPice: "$400",
      ratingCount: "99",
    },
    {
      id: 4,
      image: chairImage,
      productName: "S-Series Comfort Chair",
      price: "$375",
      discountPice: "$400",
      ratingCount: "99",
    },
  ];
  return (
    <div className="py-6">
      <div className="flex flex-col">
        <Heading title="Today" />
        <Title props="Flash Sales" />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 py-8">
        {flashSalesInfo.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id}>
            <ProductCard {...item} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center py-6">
        <ProductButton name="View All Products" />
      </div>
    </div>
  );
};

export default HomeSection_02;
