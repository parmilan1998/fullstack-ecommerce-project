import React from "react";
import { CiGift } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import AboutCard from "./AboutCard";

const AboutSalesCountSection = () => {
  const aboutInfo = [
    {
      id: 1,
      icon: <CiGift />,
      count: "10.5k ",
      content: "Sellers active our site",
    },
    {
      id: 2,
      icon: <AiOutlineDollar />,
      count: "33k",
      content: "Monthly Product Sale",
    },
    {
      id: 3,
      icon: <IoBagOutline />,
      count: "45.5k",
      content: "Customer active in our site",
    },
    {
      id: 4,
      icon: <FaSackDollar />,
      count: "25k",
      content: "Annual gross sale in our site",
    },
  ];
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 py-8">
      {aboutInfo.map((about) => (
        <div key={about.id}>
          <AboutCard
            icon={about.icon}
            count={about.count}
            content={about.content}
          />
        </div>
      ))}
    </div>
  );
};

export default AboutSalesCountSection;
