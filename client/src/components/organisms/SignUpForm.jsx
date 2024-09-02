import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/userSlice";

const SignUpForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(formData));
    if (result) {
      toggleForm();
    }
  };

  return (
    <div className="flex flex-col font-poppins p-4">
      <form onSubmit={handleSubmit}>
        <div className="my-6">
          <input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            className="w-full h-10 bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
        </div>
        <div className="my-6">
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter email address"
            className="w-full h-10 bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
        </div>
        <div className="my-6">
          <input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter password"
            className="w-full h-10 bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 w-full py-2 rounded text-white text-sm font-normal hover:bg-blue-700 ease-in duration-200"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
