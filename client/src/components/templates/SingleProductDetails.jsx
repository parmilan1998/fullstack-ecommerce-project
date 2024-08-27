import React from "react";
import ProductImageGallery from "../organisms/ProductImageGallery";
import SingleProductInfo from "../organisms/SingleProductInfo";

const SingleProductDetails = () => {
  return (
    <div className="grid lg:grid-cols-7 grid-cols-4  gap-6">
      <div className="col-span-4">
        <ProductImageGallery />
      </div>
      <div className="col-span-3 lg:px-0 md:px-12 px-5">
        <SingleProductInfo />
      </div>
    </div>
  );
};

export default SingleProductDetails;
