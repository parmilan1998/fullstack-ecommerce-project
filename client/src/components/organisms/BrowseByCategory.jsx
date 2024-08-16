import React from "react";
import Heading from "../atoms/Heading";
import Title from "../atoms/Title";
import CategorySlider from "../molecules/CategorySlider";

const HomeSection_03 = () => {
  return (
    <div className="py-6">
      <Heading title="Categories" />
      <Title props="Browse By Category" />
      <CategorySlider />
    </div>
  );
};

export default HomeSection_03;
