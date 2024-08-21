import React from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-2xl font-bold tracking-wide py-3">
          Create an account
        </h1>
        <p className="">Enter your details below</p>
      </div>
      <form>
        <div className="my-6">
          <input
            id="id-b02"
            type="text"
            name="id-b02"
            placeholder="Enter your name"
            className=" w-80 h-10 bg-white px-0 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
        </div>
        <div className="my-6">
          <input
            id="id-b02"
            type="text"
            name="id-b02"
            placeholder="Enter email address"
            className=" w-80 h-10 bg-white px-0 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
        </div>
        <div className="my-6">
          <input
            id="id-b02"
            type="text"
            name="id-b02"
            placeholder="Enter password"
            className=" w-80 h-10 bg-white px-0 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
        </div>
        <div>
          <button className="bg-blue-500 w-full py-2 rounded text-white text-sm font-normal hover:bg-blue-700 ease-in duration-200">
            Create Account
          </button>
        </div>
        <div className="flex py-5 gap-2 justify-center">
          <span className="text-sm">Already have account?</span>
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-500 font-normal ease-in duration-200"
          >
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
