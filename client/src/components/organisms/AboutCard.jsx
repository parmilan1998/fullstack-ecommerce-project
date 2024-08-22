import React from "react";
import RoundedButton from "../atoms/RoundedButton";

const AboutCard = ({ icon, count, content }) => {
  return (
    <div>
      <div className=" font-poppins flex flex-col border border-slate-300 py-6 hover:bg-blue-400 hover:text-white cursor-pointer mx-4 rounded justify-center items-center">
        <div className="bg-slate-200 p-2 rounded-full w-12">
          <RoundedButton icon={icon} />
        </div>
        <div className="flex flex-col text-center space-y-2 py-3">
          <span className="text-2xl font-bold">{count}</span>
          <span className="text-sm">{content}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
