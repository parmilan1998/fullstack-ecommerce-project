import React from "react";
import ProductImageGallery from "../organisms/ProductImageGallery";
import SingleProductInfo from "../organisms/SingleProductInfo";

const SingleProductDetails = () => {
  return (
    <div className="grid grid-cols-7 gap-6">
      <div className="col-span-4">
        <ProductImageGallery />
      </div>
      <div className="col-span-3">
        <SingleProductInfo />
      </div>
    </div>
  );
};

export default SingleProductDetails;
