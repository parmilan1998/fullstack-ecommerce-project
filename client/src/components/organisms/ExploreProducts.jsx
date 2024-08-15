import React from "react";
import Heading from "../atoms/Heading";
import Title from "../atoms/Title";
import DogFoodImage from "../../assets/dogFood.png";
import CameraImage from "../../assets/camera.png";
import BootsImage from "../../assets/boots.png";
import CarImage from "../../assets/car.png";
import CurologyImage from "../../assets/curology.png";
import GamePadImage from "../../assets/gamePad.png";
import JacketImage from "../../assets/jacket.png";
import LaptopImage from "../../assets/laptop.png";
import ProductCard from "../molecules/ProductCard";
import ProductButton from "../atoms/ProductButton";

const ExploreProducts = () => {
  return (
    <div className="py-6">
      <div>
        <Heading title="Our Products" />
        <Title props="Explore Our Products" />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 py-8">
        <ProductCard
          image={DogFoodImage}
          productName="The north coat"
          price="$360"
          discountPice="$260"
          ratingCount="65"
        />
        <ProductCard
          image={CameraImage}
          productName="Gucci duffle bag"
          price="$1160"
          discountPice="$960"
          ratingCount="75"
        />
        <ProductCard
          image={LaptopImage}
          productName="RGB liquid CPU Cooler"
          price="$170"
          discountPice="$160"
          ratingCount="65"
        />
        <ProductCard
          image={CurologyImage}
          productName="Small BookSelf"
          price="$400"
          discountPice="$360"
          ratingCount="99"
        />
        <ProductCard
          image={CarImage}
          productName="The north coat"
          price="$360"
          discountPice="$260"
          ratingCount="65"
        />
        <ProductCard
          image={BootsImage}
          productName="Gucci duffle bag"
          price="$1160"
          discountPice="$960"
          ratingCount="75"
        />
        <ProductCard
          image={GamePadImage}
          productName="RGB liquid CPU Cooler"
          price="$170"
          discountPice="$160"
          ratingCount="65"
        />
        <ProductCard
          image={JacketImage}
          productName="Small BookSelf"
          price="$400"
          discountPice="$360"
          ratingCount="99"
        />
      </div>
      <div className="flex justify-center items-center py-6">
        <ProductButton name="View All Products" />
      </div>
    </div>
  );
};

export default ExploreProducts;
