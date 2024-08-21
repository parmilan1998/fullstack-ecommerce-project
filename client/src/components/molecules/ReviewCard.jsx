import React from "react";
import RatingStar from "../atoms/RatingStar";

const ReviewCard = ({ customer, review }) => {
  return (
    <div>
      <blockquote className="flex h-full flex-col justify-between bg-gray-100 p-2 shadow-sm sm:p-8">
        <div>
          <RatingStar />
          <div className="mt-2">
            <p className="text-md font-bold text-sky-600 sm:text-2xl">
              {customer}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              {review}
            </p>
          </div>
        </div>
        <footer className="mt-2 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; {customer}
        </footer>
      </blockquote>
    </div>
  );
};

export default ReviewCard;
