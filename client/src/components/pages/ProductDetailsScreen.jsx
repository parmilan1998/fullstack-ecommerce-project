import React, { Suspense, lazy } from "react";
import Title from "../atoms/Title";

const RelatedItem = lazy(() => import("../templates/RelatedItem"));
const Review = lazy(() => import("../templates/Review"));
const SingleProductDetails = lazy(() =>
  import("../templates/SingleProductDetails")
);

const ProductDetailsScreen = ({ item }) => {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", padding: "20px", fontSize: "24px" }}>
          Loading...
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
