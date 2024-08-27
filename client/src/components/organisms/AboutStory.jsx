import React from "react";
import AboutImg from "../../assets/aboutImg.jpg";

const AboutStory = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:px-0 md:px-8 px-4 gap-6 py-12 font-poppins">
      <div className=" col-span-2 flex flex-col justify-center items-start">
        <h2 className=" font-roboto text-4xl text-black font-bold pb-6 tracking-wide">
          Our Story
        </h2>
        <p className="flex flex-col gap-3 lg:w-5/6">
          <span className=" tracking-wide leading-6">
            QuickCart, a thriving online marketplace, was born from the bustling
            streets of Jaffna in 2018. Founded by Priya Rajasingham, a young
            Tamil entrepreneur, the store began as a small operation selling
            local spices and handcrafts.
          </span>
          <span className=" tracking-wide leading-6">
            Today, QuickCart not only serves the Tamil population in Jaffna but
            has also become a bridge connecting local artisans and businesses to
            customers across Sri Lanka and beyond.{" "}
          </span>
        </p>
      </div>
      <div className=" col-span-2">
        <img
          src={AboutImg}
          alt="About Image"
          className="h-96 rounded bg-cover object-fill"
        />
      </div>
    </div>
  );
};

export default AboutStory;
