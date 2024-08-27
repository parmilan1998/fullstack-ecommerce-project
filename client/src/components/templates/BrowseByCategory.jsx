import React from "react";
import Heading from "../molecules/Heading";
import Title from "../atoms/Title";
import CategorySlider from "../organisms/CategorySlider";

const HomeSection_03 = () => {
  return (
    <div className="py-6 lg:px-0 md:px-14 px-2">
      <Heading title="Categories" />
      <Title props="Browse By Category" />
      <CategorySlider />
    </div>
  );
};

export default HomeSection_03;
