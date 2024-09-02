import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const AuthForm = ({ setIsModalOpen }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="font-poppins">
      <div>
        <div className="flex flex-col font-poppins p-4">
          <div>
            <h1 className="text-2xl font-bold tracking-wide py-2 text-center">
              {isLogin ? "Log into QuickCart" : "Sign up for QuickCart"}
            </h1>
            <p className="text-center">Enter your details below</p>
          </div>
          {isLogin ? (
            <LoginForm setIsModalOpen={setIsModalOpen} />
          ) : (
            <SignUpForm toggleForm={toggleForm} />
          )}
          <div className="flex py-4 px-4 gap-2 justify-between">
            <div className="flex gap-2">
              <span className="text-sm">
                {isLogin ? "Not registered?" : "Already have an account?"}
              </span>
              <button
                onClick={toggleForm}
                className="text-sm text-blue-500 hover:underline hover:text-blue-700 font-normal ease-in duration-200"
              >
                {isLogin ? "Sign Up" : "Log In"}
              </button>
            </div>
            {isLogin && (
              <div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-red-500 hover:underline hover:text-red-500 font-normal ease-in duration-200"
                >
                  Forgot Password?
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
