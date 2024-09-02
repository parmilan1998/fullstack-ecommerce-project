import React from "react";

const LoginForm = () => {
  return (
    <div>
      <div className="flex flex-col font-poppins p-4">
        <form>
          <div className="my-6">
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter email address"
              className=" w-full h-10 bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
          </div>
          <div className="my-6">
            <input
              id="id-b02"
              type="text"
              name="id-b02"
              placeholder="Enter password"
              className=" w-full h-10 bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
          </div>
          <div>
            <button className="bg-blue-500 w-full py-2 rounded text-white text-sm font-normal hover:bg-blue-700 ease-in duration-200">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
