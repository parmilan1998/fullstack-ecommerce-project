import React from "react";

const ButtonRounded = ({ name }) => {
  return (
    <button className="border border-slate-200 text-base my-2 hover:bg-blue-500 hover:text-white rounded-full px-10 py-1.5">
      {name}
    </button>
  );
};

export default ButtonRounded;
