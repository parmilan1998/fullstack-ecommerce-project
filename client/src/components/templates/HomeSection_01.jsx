import React from "react";
import CategoryListSection from "../organisms/CategoryListSection";
import HomeCarousel from "../organisms/HomeCarousel";

const HomeSection_01 = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:gird-cols-2 grid-cols-1 gap-3">
        <div className="col-span-1">
          <CategoryListSection />
        </div>
        <div className="col-span-3">
          <HomeCarousel />
        </div>
      </div>
    </div>
  );
};

export default HomeSection_01;
