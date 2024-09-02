import React from "react";

const ReviewForm = () => {
  return (
    <div className=" font-poppins">
      <div className="flex justify-center items-center">
        <span className="text-lg font-poppins pt-4 text-center">
          Hello, Ravi What do you think about it?
        </span>
      </div>
      <div className="py-6">
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-900 my-2">
            Review Title
          </label>
          <input
            className="w-full rounded py-1.5 border border-slate-200 px-3 focus:outline-slate-200"
            type="text"
            placeholder="Enter the title"
          />
        </div>
        <div>
          <label
            htmlFor="HeadlineAct"
            className="block text-sm font-medium text-gray-900 my-2"
          >
            Ratting
          </label>

          <div className="relative mt-1.5">
            <input
              type="text"
              list="HeadlineActArtist"
              id="HeadlineAct"
              className="w-full rounded py-1.5 border border-slate-200 px-3 focus:outline-slate-200"
              placeholder="Please select"
            />

            <span className="absolute inset-y-0 end-0 flex w-8 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </span>
          </div>

          <datalist
            name="HeadlineAct"
            id="HeadlineActArtist"
            className=" font-poppins"
          >
            <option value="1" className=" font-poppins">
              1 - Strongly Disagree
            </option>
            <option value="2" className=" font-poppins">
              2 - Disagree
            </option>
            <option value="3" className=" font-poppins">
              3 - Neutral or Neither Agree nor Disagree
            </option>
            <option value="4" className=" font-poppins">
              4 - Agree
            </option>
            <option value="5" className=" font-poppins">
              5 - Strongly Agree
            </option>
          </datalist>
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-900 my-2">
            Review
          </label>
          <textarea
            className="w-full rounded py-1.5 border border-slate-200 px-3 focus:outline-slate-200"
            type="text"
            placeholder="Write your review here"
            rows="4"
          />
        </div>

        <div className="flex items-center gap-3 pt-4">
          <button
            type="submit"
            className="w-full rounded py-1.5 border border-slate-200 px-3 bg-blue-500 hover:bg-blue-700 ease-in duration-200 text-white text-base focus:outline-slate-200"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
