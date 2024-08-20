import React from "react";
import ProductImageGallery from "../organisms/ProductImageGallery";
import SingleProductInfo from "../organisms/SingleProductInfo";
import RelatedItem from "../organisms/RelatedItem";

const ProductDetailsScreen = ({ item }) => {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-4">
          <ProductImageGallery />
        </div>
        <div className="col-span-3">
          <SingleProductInfo />
        </div>
      </div>
      <RelatedItem />
    </div>
  );
};

export default ProductDetailsScreen;
