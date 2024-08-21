import React from "react";
import AuthImageSection from "../molecules/AuthImageSection";
import SignUpForm from "../organisms/SignUpForm";

const SignupScreen = () => {
  return (
    <section className="flex flex-row font-poppins">
      <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 gap-1 bg-white rounded">
        <div className=" col-span-3">
          <AuthImageSection />
        </div>
        <div className=" col-span-2 w-full flex items-center justify-center">
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};

export default SignupScreen;
