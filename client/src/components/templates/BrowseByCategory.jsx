import React from "react";
import Heading from "../molecules/Heading";
import Title from "../atoms/Title";
import CategorySlider from "../organisms/CategorySlider";

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
