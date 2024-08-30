import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const apiUrl = import.meta.env.VITE_BASE_URL;

const ProductImageGallery = ({ product }) => {
  const [mainImage, setMainImage] = useState(
    `${apiUrl}/${product.product.productImage[1]}`
  );
  console.log(mainImage);
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center items-center">
      <div className="flex md:flex-col flex-row gap-4 rounded bg-gray-200 p-2.5 m-3">
        {product.product.productImage.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`cursor-pointer p-2 md:w-32 md:h-28 w-16 h-16 object-fill rounded ${
              image === mainImage
                ? "border-2 border-blue-500"
                : "border-2 border-transparent"
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
      <div>
        <Zoom>
          <img
            src={mainImage}
            className="md:w-[520px] md:h-[520px] w-80 h-80 bg-cover p-4 object-fill bg-slate-200 rounded"
            alt="Main Product"
          />
        </Zoom>
      </div>
    </div>
  );
};

export default ProductImageGallery;
