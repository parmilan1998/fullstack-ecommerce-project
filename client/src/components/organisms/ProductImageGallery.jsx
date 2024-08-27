import React, { useState } from "react";
import GamePadImage from "../../assets/img01.png";
import GamePadImage2 from "../../assets/img02.png";
import GamePadImage3 from "../../assets/img03.png";
import GamePadImage4 from "../../assets/img04.png";
// import GamePadImage5 from "../../assets/image05.png";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductImageGallery = () => {
  const images = [
    GamePadImage,
    GamePadImage2,
    GamePadImage3,
    GamePadImage4,
    // GamePadImage5,
  ];

  const [mainImage, setMainImage] = useState(images[1]);

  return (
    <div className="flex md:flex-row flex-col-reverse justify-center items-center">
      <div className="flex md:flex-col flex-row gap-4 rounded bg-gray-200 p-2.5 m-3">
        {images.map((image, index) => (
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
