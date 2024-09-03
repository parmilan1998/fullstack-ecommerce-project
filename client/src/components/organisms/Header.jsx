import React, { useState } from "react";
import SearchBar from "../molecules/SearchBar";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import AuthForm from "./AuthForm";
import { RiMenuUnfold2Line } from "react-icons/ri";
import ToggleMenu from "./ToggleMenu";
import { useDispatch, useSelector } from "react-redux";
import { logout, logoutUser } from "../../features/userSlice";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const role = useSelector((state) => state.user.role);

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
      customClass: {
        popup: "rounded-lg shadow-lg bg-white p-6 font-poppins",
        title: "text-xl font-semibold text-gray-800 font-poppins",
        content: "text-gray-600 font-poppins text-sm ",
        confirmButton:
          "bg-blue-500 hover:bg-blue-600 text-white text-sm  py-2 px-4 rounded font-poppins",
        cancelButton:
          "bg-red-500 hover:bg-red-600 text-white text-sm  py-2 px-4 rounded ml-2 font-poppins",
      },
    });

    if (result.isConfirmed) {
      try {
        await dispatch(logoutUser());
        dispatch(logout());
        toast.success("Logout Successfully!");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="font-poppins">
      <nav className="flex max-w-screen-xl my-4 px-4 mx-auto lg:px-16 justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold">QuickCart</h1>
        </Link>
        <div>
          <ul className="md:flex gap-3 hidden">
            <li className=" text-base tracking-wide cursor-pointer hover:text-gray-500 font-normal hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className=" text-base tracking-wide cursor-pointer hover:text-gray-500 font-normal hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
            <li className=" text-base tracking-wide cursor-pointer hover:text-gray-500 font-normal hover:underline">
              <Link to="/about">About</Link>
            </li>
            <li className=" text-base tracking-wide cursor-pointer hover:text-gray-500 font-normal hover:underline">
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <div className="md:flex hidden justify-center text-xl items-center gap-6 lg:px-0 px-4">
            <div className="lg:flex hidden">
              <SearchBar />
            </div>
            <Link to="/wishlist">
              <IoMdHeartEmpty />
            </Link>
            <Link to="/cart">
              <BsCart3 />
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center text-sm gap-2"
              >
                logout
              </button>
            ) : (
              <div className="flex justify-center items-center">
                <AuthModal name="Log In" AuthForm={AuthForm} />
              </div>
            )}
          </div>
          <button
            onClick={toggleMenu}
            className="flex md:hidden justify-center items-center"
          >
            <RiMenuUnfold2Line size={28} />
          </button>
        </div>
      </nav>
      {isOpen && (
        <>
          <ToggleMenu setIsOpen={setIsOpen} />
        </>
      )}
      <hr />
    </div>
  );
};

export default Header;
