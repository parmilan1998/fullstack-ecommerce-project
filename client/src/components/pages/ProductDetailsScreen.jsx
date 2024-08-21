import React from "react";
import ProductImageGallery from "../organisms/ProductImageGallery";
import SingleProductInfo from "../organisms/SingleProductInfo";
import RelatedItem from "../templates/RelatedItem";
import Title from "../atoms/Title";
import Review from "../templates/Review";

const ProductDetailsScreen = ({ item }) => {
  return (
    <div className="mx-auto">
      <div className="py-3">
        <Title props="Product Details" />
      </div>
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-4">
          <ProductImageGallery />
        </div>
        <div className="col-span-3">
          <SingleProductInfo />
        </div>
      </div>
      <Review />
      <RelatedItem />
    </div>
  );
};

export default ProductDetailsScreen;
