import React from "react";
import HomeSection_01 from "../organisms/HomeSection_01";
import FlashSales from "../organisms/FlashSales";
import BrowseByCategory from "../organisms/BrowseByCategory";
import BestSellingProducts from "../organisms/BestSellingProducts";
import ExploreProducts from "../organisms/ExploreProducts";
import NewArrival from "../organisms/NewArrival";

const HomeScreen = () => {
  return (
    <div>
      <HomeSection_01 />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <ExploreProducts />
      <NewArrival />
    </div>
  );
};

export default HomeScreen;
