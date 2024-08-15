import React from "react";
import { GrFormView } from "react-icons/gr";

const ViewProductButton = () => {
  return (
    <div className="p-1 w-8 flex justify-center items-center rounded-full bg-white m-2 text-black">
      <GrFormView size={24} />
    </div>
  );
};

export default ViewProductButton;
