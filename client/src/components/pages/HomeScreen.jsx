import React from "react";
import FlashSales from "../templates/FlashSales";
import BrowseByCategory from "../templates/BrowseByCategory";
import BestSellingProducts from "../templates/BestSellingProducts";
import ExploreProducts from "../templates/ExploreProducts";
import NewArrival from "../organisms/NewArrival";
import Services from "../templates/Services";
import GoTopButton from "../atoms/GoTopButton";
import HomeSection_01 from "../templates/HomeSection_01";

const HomeScreen = () => {
  return (
    <div>
      <HomeSection_01 />
      <FlashSales />
      <BrowseByCategory />
      <BestSellingProducts />
      <ExploreProducts />
      {/* <NewArrival /> */}
      <Services />
      <div className="flex justify-end items-end right-0">
        <GoTopButton />
      </div>
    </div>
  );
};

export default HomeScreen;
