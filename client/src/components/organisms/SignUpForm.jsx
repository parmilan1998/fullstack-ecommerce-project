import React from "react";
import { useDispatch } from "react-redux";
import { registered, registerUser } from "../../features/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
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
});

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(registerUser(data)).unwrap();
      dispatch(registered(result));
      toast.success("Account created successfully!");
      navigate("/verification");
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
            type="text"
            placeholder="Enter your name"
            {...register("username")}
            className={`w-full rounded h-10 bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white ${
              errors.username
                ? "invalid:border-pink-500 invalid:text-pink-500"
                : "focus:border-emerald-500"
            }`}
          />
          {errors.username && (
            <p className="text-pink-500 text-xs px-2">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="my-6">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            {...register("email")}
            className={`w-full rounded h-10 bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white ${
              errors.email
                ? "invalid:border-pink-500 invalid:text-pink-500"
                : "focus:border-emerald-500"
            }`}
          />
          {errors.email && (
            <p className="text-pink-500 text-xs px-2">{errors.email.message}</p>
          )}
        </div>

        <div className="my-6">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            {...register("password")}
            className={`w-full rounded h-10 bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white ${
              errors.password
                ? "invalid:border-pink-500 invalid:text-pink-500"
                : "focus:border-emerald-500"
            }`}
          />
          {errors.password && (
            <p className="text-pink-500 text-xs px-2">
              {errors.password.message}
            </p>
          )}
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
