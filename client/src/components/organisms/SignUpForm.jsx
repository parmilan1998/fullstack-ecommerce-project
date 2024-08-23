import React, { useState } from "react";
import { Modal } from "antd";
import LoginForm from "./LoginForm";

const SignUpForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showLoginModal = () => {
    setIsOpen(true);
  };

  const handleLoginCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col font-poppins p-4">
      <div>
        <h1 className="text-2xl font-bold tracking-wide py-4 text-center">
          Create an account
        </h1>
        <p className="text-center">Enter your details below</p>
      </div>
      <form>
        <div className="my-6">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full h-10 bg-white px-0 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
        </div>
        <div className="my-6">
          <input
            type="text"
            placeholder="Enter email address"
            className="w-full h-10 bg-white px-0 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
        </div>
        <div className="my-6">
          <input
            type="password"
            placeholder="Enter password"
            className="w-full h-10 bg-white px-0 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
        </div>
        <div>
          <button className="bg-blue-500 w-full py-2 rounded text-white text-sm font-normal hover:bg-blue-700 ease-in duration-200">
            Create Account
          </button>
        </div>
        <div className="flex py-5 gap-2 justify-center">
          <span className="text-sm">Already have an account?</span>
          <button
            className="text-sm hover:underline hover:text-blue-500 font-normal ease-in duration-200"
            onClick={showLoginModal}
            type="button"
          >
            Log in
          </button>
          <Modal open={isOpen} onCancel={handleLoginCancel} footer={null}>
            <LoginForm />
          </Modal>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
