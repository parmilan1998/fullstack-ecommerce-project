import React, { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const apiUrl = import.meta.env.VITE_BASE_URL;

const ProductImageGallery = ({ product }) => {
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (product?.productImage && product.productImage.length > 0) {
      setMainImage(`${apiUrl}/${product.productImage[1]}`);
    }
  }, [product]);

  if (!product?.productImage || product.productImage.length === 0) {
    return <p>No images available for this product.</p>;
  }

  return (
    <div className="flex md:flex-row flex-col-reverse justify-center items-center">
      <div className="flex md:flex-col flex-row gap-4 rounded  p-2.5 m-3">
        {product.productImage.map((image, index) => (
          <img
            key={index}
            src={`${apiUrl}/${image}`}
            alt={`Thumbnail ${index + 1}`}
            className={`bg-gray-200 cursor-pointer p-2 md:w-32 md:h-28 w-16 h-16 object-fill rounded ${
              `${apiUrl}/${image}` === mainImage
                ? "border-2 border-blue-500"
                : "border-2 border-transparent"
            }`}
            onClick={() => setMainImage(`${apiUrl}/${image}`)}
          />
        ))}
      </div>
      <div>
        <Zoom>
          <img
            src={mainImage}
            className="md:w-[520px] md:h-[500px] w-80 h-80 bg-cover p-4 object-fill bg-slate-200 rounded"
            alt="Main Product"
          />
        </Zoom>
      </div>
    </div>
  );
};

export default ProductImageGallery;
