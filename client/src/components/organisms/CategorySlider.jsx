import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrowseByCategoryCard from "./BrowseByCategoryCard";
import Camera from "../../assets/cam.png";
import computer from "../../assets/computer.png";
import gaming from "../../assets/gaming.png";
import headPhone from "../../assets/headphone.png";
import phone from "../../assets/phone.png";
import watch from "../../assets/watch.png";
import HomeCategoryNext from "../atoms/HomeCategoryNext";
import HomeCategoryPrev from "../atoms/HomeCategoryPrev";

function Responsive() {
  const categoryInfo = [
    { id: 1, name: "Phones", image: phone },
    { id: 2, name: "Computer", image: computer },
    { id: 3, name: "Camera", image: Camera },
    { id: 4, name: "SmartWatch", image: watch },
    { id: 5, name: "HeadPhones", image: headPhone },
    { id: 6, name: "Gaming", image: gaming },
  ];

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute right-0 -top-8 -translate-y-1/2"
        onClick={onClick}
      >
        <HomeCategoryNext />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute right-12 -top-8 -translate-y-1/2 "
        onClick={onClick}
      >
        <HomeCategoryPrev />
      </button>
    );
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    // arrows: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {categoryInfo.map((item) => (
          <button
            key={item.id}
            className="flex justify-center items-center mx-auto gap-3"
          >
            <BrowseByCategoryCard name={item.name} image={item.image} />
          </button>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
