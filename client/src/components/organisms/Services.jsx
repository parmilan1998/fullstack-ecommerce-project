import React from "react";
import ServiceSection from "../molecules/ServiceSection";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadsetFill } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";

const Services = () => {
  const serviceInfo = [
    {
      id: 1,
      icon: <TbTruckDelivery />,
      title: "FREE AND FAST DELIVERY",
      subTitle: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: <PiHeadsetFill />,
      title: "24/7 CUSTOMER SERVICE",
      subTitle: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: <GiMoneyStack />,
      title: "MONEY BACK GUARANTEE",
      subTitle: "We return money within 30 days",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 py-8">
      {serviceInfo.map((service) => (
        <div key={service.id}>
          <ServiceSection
            icon={service.icon}
            title={service.title}
            subTitle={service.subTitle}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
