import React, { Suspense, lazy } from "react";
import Title from "../atoms/Title";
import LoadingSpinner from "../atoms/LoadingSpinner";

const RelatedItem = lazy(() => import("../templates/RelatedItem"));
const Review = lazy(() => import("../templates/Review"));
const SingleProductDetails = lazy(() =>
  import("../templates/SingleProductDetails")
);

const ProductDetailsScreen = ({ item }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center">
          <LoadingSpinner />
        </div>
      }
    >
      <div className="mx-auto">
        <div className="py-3">
          <Title text="Product Details" />
        </div>
        <SingleProductDetails item={item} />
        <Review />
        <RelatedItem />
      </div>
    </Suspense>
  );
};

export default ProductDetailsScreen;
