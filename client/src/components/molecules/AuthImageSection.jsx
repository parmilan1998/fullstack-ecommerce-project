import React from "react";
import SignUpImage from "../../assets/signup.jpg";

const AuthImageSection = () => {
  return (
    <div>
      <div className="">
        <img
          alt=""
          src={SignUpImage}
          className=" rounded-l inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthImageSection;
