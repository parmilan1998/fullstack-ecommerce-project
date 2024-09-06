import React from "react";
import { login, loginUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = ({ setIsModalOpen }) => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await dispatch(loginUser(data)).unwrap();
      dispatch(login(result));
      toast.success("Login Successfully!");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex flex-col font-poppins p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-6">
            <input
              id="email"
              {...register("email")}
              type="email"
              placeholder="Enter email address"
              className={`w-full h-10 rounded bg-white px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white ${
                errors.email
                  ? "invalid:border-pink-500 invalid:text-pink-500"
                  : "focus:border-emerald-500"
              }`}
            />
            {errors.email && (
              <p className="text-pink-500 text-xs px-2">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="my-6">
            <input
              id="password"
              {...register("password")}
              type="password"
              placeholder="Enter password"
              className={`w-full h-10 bg-white rounded px-2 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white ${
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
