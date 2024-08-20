import React, { useState } from "react";
import SizeButton from "../atoms/SizeButton";

const ProductSize = () => {
  const [selected, setSelected] = useState([3]);
  const size = [
    {
      id: 1,
      size: "XS",
    },
    {
      id: 2,
      size: "S",
    },
    {
      id: 3,
      size: "M",
    },
    {
      id: 4,
      size: "L",
    },
    {
      id: 5,
      size: "XL",
    },
  ];

  const handleSizeClick = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sizeId) => sizeId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <span className=" text-lg">Size:</span>
        {size.map((item) => (
          <SizeButton
            key={item.id}
            {...item}
            selected={selected.includes(item.id)}
            onClick={handleSizeClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSize;
