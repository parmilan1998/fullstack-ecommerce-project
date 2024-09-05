import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register, registerUser } from "../../features/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const schema = yup
    .object({
      formData: yup
        .object({
          username: yup.string().required("Username is required"),
          email: yup
            .string()
            .email("Must be a valid email")
            .required("Email is required"),
          password: yup
            .string()
            .min(6, "Password must be at least 6 characters long")
            .matches(/[a-zA-Z]/, "Password must contain at least one letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(
              /[!@#$%^&*(),.?":{}|<>]/,
              "Password must contain at least one special character"
            )
            .required("Password is required"),
        })
        .required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async ({ e, data }) => {
    e.preventDefault();
    try {
      const result = await dispatch(registerUser(formData)).unwrap();
      dispatch(register(result));
      toast.success("Account created successfully!");
      navigate("/verification", { replace: true });
    } catch (error) {
      toast.error(error.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col font-poppins p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-6">
          <input
            id="username"
            name="username"
            // value={formData.username}
            // onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            {...register("username")}
            className="w-full h-10 bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <p>{errors.username?.message}</p>
        </div>
        <div className="my-6">
          <input
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            type="email"
            placeholder="Enter email address"
            {...register("email")}
            className="w-full h-10 bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="my-6">
          <input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter password"
            {...register("password")}
            className="w-full h-10 bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <p>{errors.password?.message}</p>
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
