import React from "react";

const RatingStar = () => {
  return (
    <div>
      <div className="rating rating-sm">
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-6"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
    </div>
  );
};

export default RatingStar;
