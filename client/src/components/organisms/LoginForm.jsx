import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <h1 className="text-2xl font-bold tracking-wide py-3">
            Log into QuickCart
          </h1>
          <p className="">Enter your details below</p>
        </div>
        <form>
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
              Log In
            </button>
          </div>
          <div className="flex py-5 gap-2 justify-between">
            <div className="flex gap-2">
              <span className="text-sm">Not registered?</span>
              <Link
                to="/signup"
                className="text-sm text-blue-500 hover:underline hover:text-blue-500 font-normal ease-in duration-200"
              >
                Sign Up
              </Link>
            </div>
            <div>
              <Link
                to="/forgot-password"
                className="text-sm text-red-500 hover:underline hover:text-red-500 font-normal ease-in duration-200"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
