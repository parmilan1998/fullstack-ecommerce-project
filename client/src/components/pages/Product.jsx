import React from "react";
import Heading from "../atoms/Heading";
import Title from "../atoms/Title";
import ProductCard from "../molecules/ProductCard";
import DogFoodImage from "../../assets/dogFood.png";
import CameraImage from "../../assets/camera.png";
import BootsImage from "../../assets/boots.png";
import CarImage from "../../assets/car.png";
import CurologyImage from "../../assets/curology.png";
import GamePadImage from "../../assets/gamePad.png";
import JacketImage from "../../assets/jacket.png";
import LaptopImage from "../../assets/laptop.png";
import CoatImage from "../../assets/coat.png";
import BagImage from "../../assets/bag.png";
import CoolerImage from "../../assets/cooler.png";
import BookselfImage from "../../assets/bookself.png";
import Pagination from "../molecules/Pagination";
import { Link } from "react-router-dom";

const Product = () => {
  const exploreProductsInfo = [
    {
      id: 1,
      image: DogFoodImage,
      productName: "The north coat",
      price: "$360",
      discountPice: "$260",
      ratingCount: "65",
    },
    {
      id: 2,
      image: CameraImage,
      productName: "Gucci duffle bag",
      price: "$1160",
      discountPice: "$960",
      ratingCount: "75",
    },
    {
      id: 3,
      image: LaptopImage,
      productName: "RGB liquid CPU Cooler",
      price: "$170",
      discountPice: "$160",
      ratingCount: "65",
    },
    {
      id: 4,
      image: CurologyImage,
      productName: "Small BookSelf",
      price: "$400",
      discountPice: "$360",
      ratingCount: "99",
    },
    {
      id: 5,
      image: CarImage,
      productName: "The north coat",
      price: "$360",
      discountPice: "$260",
      ratingCount: "65",
    },
    {
      id: 6,
      image: GamePadImage,
      productName: "The north coat",
      price: "$360",
      discountPice: "$260",
      ratingCount: "65",
    },
    {
      id: 7,
      image: JacketImage,
      productName: "The north coat",
      price: "$360",
      discountPice: "$260",
      ratingCount: "65",
    },
    {
      id: 8,
      image: BootsImage,
      productName: "The north coat",
      price: "$360",
      discountPice: "$260",
      ratingCount: "65",
    },
    {
      id: 9,
      image: CoatImage,
      productName: "The north coat",
      price: "$360",
      discountPice: "$260",
      ratingCount: "65",
    },
    {
      id: 10,
      image: BagImage,
      productName: "Gucci duffle bag",
      price: "$1160",
      discountPice: "$960",
      ratingCount: "75",
    },
    {
      id: 11,
      image: CoolerImage,
      productName: "RGB liquid CPU Cooler",
      price: "$170",
      discountPice: "$160",
      ratingCount: "65",
    },
    {
      id: 12,
      image: BookselfImage,
      productName: "Small BookSelf",
      price: "$400",
      discountPice: "$360",
      ratingCount: "65",
    },
  ];
  return (
    <div className="py-6 font-poppins">
      <div>
        <Heading title="Our Products" />
        <Title props="Explore Our Products" />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 py-8">
        {exploreProductsInfo.map((item) => (
          <Link to={`/products/${item.id}`} key={item.id}>
            <ProductCard {...item} />
          </Link>
        ))}
      </div>
      <div className="mx-auto flex justify-center items-center py-4">
        <Pagination />
      </div>
    </div>
  );
};

export default Product;
