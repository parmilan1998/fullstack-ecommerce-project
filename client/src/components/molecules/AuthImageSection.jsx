import React from "react";
import SignUpImage from "../../assets/signup.jpg";

const AuthImageSection = () => {
  return (
    <img
      alt="Auth Image Section"
      src={SignUpImage}
      className=" rounded-l inset-0 h-full w-full object-cover"
    />
  );
};

export default AuthImageSection;
