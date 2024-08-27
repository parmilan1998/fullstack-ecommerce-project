import React from "react";
import ReviewCard from "../organisms/ReviewCard";
import Title from "../atoms/Title";
import { Link } from "react-router-dom";

const Review = () => {
  const reviewsInfo = [
    {
      id: 1,
      customer: "John Doe",
      title: "Customer",
      review:
        "This product is amazing! I bought it for my dog and it has been so much fun!",
      rating: 5,
    },
    {
      id: 2,
      customer: "Jane Smith",
      title: "Customer",
      review:
        "I absolutely love this product! I use it every day to keep my dog healthy and happy.",
      rating: 4,
    },
    {
      id: 3,
      customer: "David Johnson",
      title: "Customer",
      review:
        "I have no doubt this product will help my dog become even more healthy and happy.",
      rating: 3,
    },
    {
      id: 4,
      customer: "Sarah Wilson",
      title: "Customer",
      review:
        "I can't wait to see what else this product can offer for my dog!",
      rating: 5,
    },
  ];
  return (
    <div>
      <section className="font-poppins lg:mx-auto md:mx-16 mx-4">
        <div className="mx-auto py-6 lg:pl-3 lg:pr-8 lg:py-10">
          <div className="md:flex md:items-end md:justify-between">
            <Title props="Reviews from our customers" />
            <Link
              to="/reviews"
              className="mt-6 text-md inline-flex shrink-0 items-center gap-2 rounded-full border border-blue-600 px-4 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-gray-100 md:mt-0"
            >
              <span className="font-medium text-md"> Read all reviews </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 rtl:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviewsInfo.map((item) => (
              <ReviewCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
