import React from "react";
import LoginForm from "../organisms/LoginForm";
import AuthImageSection from "../molecules/AuthImageSection";

const LoginScreen = () => {
  return (
    <div>
      <section className="flex flex-row font-poppins">
        <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-2 gap-1 bg-white rounded">
          <div className=" col-span-3">
            <AuthImageSection />
          </div>
          <div className=" col-span-2 w-full flex items-center justify-center">
            <LoginForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;
