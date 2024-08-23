import React from "react";
import SearchBar from "../molecules/SearchBar";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import { Modal } from "antd";
import AuthModal from "./AuthModal";
import AuthForm from "./AuthForm";

const Header = () => {
  return (
    <div className="font-poppins">
      <nav className="flex max-w-screen-xl my-4  mx-auto lg:px-16 justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold">QuickCart</h1>
        </Link>
        <div>
          <ul className="lg:flex gap-3 hidden">
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
        <div className="lg:flex hidden justify-center text-xl items-center gap-6">
          <SearchBar />
          <Link to="/wishlist">
            <IoMdHeartEmpty />
          </Link>
          <Link to="/cart">
            <BsCart3 />
          </Link>
          {/* <Link to="/account">
            <CiUser />
          </Link> */}
          <div className="flex justify-center items-center">
            <AuthModal name="Log In" AuthForm={AuthForm} />
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
