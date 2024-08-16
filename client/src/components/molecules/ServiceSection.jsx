import React from "react";

const ServiceSection = ({ icon, title, subTitle }) => {
  return (
    <div className=" font-poppins flex flex-col justify-center items-center">
      <div className="bg-slate-200 p-2 rounded-full w-12">
        <div className="bg-black p-2 rounded-full text-white text-lg">
          {icon}
        </div>
      </div>
      <div className="flex flex-col text-center space-y-2 py-3">
        <span className="text-lg font-bold">{title}</span>
        <span className="text-sm">{subTitle}</span>
      </div>
    </div>
  );
};

export default ServiceSection;
