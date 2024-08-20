import React, { useState } from "react";

const ProductColors = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const onValueChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <span>Colors:</span>
        <fieldset className="flex items-center justify-center gap-3">
          <div className="relative flex items-center">
            <input
              className="w-4 h-4 transition-colors border-2 bg-red-500 rounded-full appearance-none cursor-pointer peer border-red-500 checked:border-red-500 checked:bg-red-200 checked:hover:border-red-600 checked:hover:bg-red-300 focus:outline-none checked:focus:border-red-700 checked:focus:bg-red-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-100 disabled:bg-red-50"
              type="radio"
              value="huey2"
              id="huey2"
              name="drone2"
              onChange={onValueChange}
            />

            <svg
              className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-red-500 peer-checked:scale-100 peer-checked:opacity-100 peer-hover:fill-red-600 peer-focus:fill-red-700 peer-disabled:cursor-not-allowed"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledBy="title-04 description-04"
              role="graphics-symbol"
            >
              <title id="title-04">Circle Shape</title>
              <desc id="description-04">
                Circle shape to indicate whether the radio input is checked or
                not.
              </desc>
              <circle cx="8" cy="8" r="4" />
            </svg>
          </div>
          <div className="relative flex items-center">
            <input
              className="w-4 h-4 transition-colors bg-green-500 border-2 rounded-full appearance-none cursor-pointer peer border-green-500 checked:border-green-500 checked:bg-green-200 checked:hover:border-green-600 checked:hover:bg-green-300 focus:outline-none checked:focus:border-green-700 checked:focus:bg-green-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-100 disabled:bg-green-50"
              type="radio"
              value="dewey2"
              id="dewey2"
              name="drone2"
              onChange={onValueChange}
              checked
            />

            <svg
              className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-green-500 peer-checked:scale-100 peer-checked:opacity-100 peer-hover:fill-green-600 peer-focus:fill-green-700 peer-disabled:cursor-not-allowed"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledBy="title-05 description-05"
              role="graphics-symbol"
            >
              <title id="title-05">Circle Shape</title>
              <desc id="description-05">
                Circle shape to indicate whether the radio input is checked or
                not.
              </desc>
              <circle cx="8" cy="8" r="4" />
            </svg>
          </div>
          <div className="relative flex items-center">
            <input
              className="w-4 h-4 transition-colors bg-purple-500 border-2 rounded-full appearance-none cursor-pointer peer border-purple-500 checked:border-purple-500 checked:bg-purple-200 checked:hover:border-purple-600 checked:hover:bg-purple-300 focus:outline-none checked:focus:border-purple-700 checked:focus:bg-purple-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-100 disabled:bg-purple-50"
              type="radio"
              value="louie2"
              id="louie2"
              name="drone2"
              onChange={onValueChange}
            />
            <svg
              className="absolute left-0 w-4 h-4 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-purple-500 peer-checked:scale-100 peer-checked:opacity-100 peer-hover:fill-purple-600 peer-focus:fill-purple-700 peer-disabled:cursor-pointer"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledBy="title-06 description-06"
              role="graphics-symbol"
            >
              <title id="title-06">Circle Shape</title>
              <desc id="description-06">
                Circle shape to indicate whether the radio input is checked or
                not.
              </desc>
              <circle cx="8" cy="8" r="4" />
            </svg>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default ProductColors;
