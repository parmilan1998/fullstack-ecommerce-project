import React from "react";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import AuthModal from "./AuthModal";

const ToggleMenu = ({ setIsOpen }) => {
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className=" absolute z-50 top-30 bg-gray-100 w-full h-screen py-6">
      <ul>
        <li className="px-4 py-2 flex justify-between text-lg tracking-wide cursor-pointer hover:text-gray-500 font-normal hover:underline">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="px-4 py-2 text-lg tracking-wide cursor-pointer hover:text-gray-500 font-normal hover:underline">
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li className="px-4 py-2 text-lg tracking-wide cursor-pointer hover:text-gray-500 font-normal hover:underline">
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className="px-4 py-2 text-lg tracking-wide cursor-pointer hover:text-gray-500 font-normal hover:underline">
          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>
        </li>
        <li className="px-4 py-2 text-lg tracking-wide cursor-pointer hover:text-gray-500 font-normal hover:underline">
          <Link to="/wishlist" onClick={closeMenu}>
            <IoMdHeartEmpty />
          </Link>
        </li>{" "}
        <li className="px-4 py-2 text-lg tracking-wide cursor-pointer hover:text-gray-500 font-normal hover:underline">
          <Link to="/cart" onClick={closeMenu}>
            <BsCart3 />
          </Link>
        </li>
        <li className="px-4 py-2 text-lg tracking-wide cursor-pointer hover:text-gray-500 font-normal hover:underline">
          <AuthModal onClick={closeMenu} name="Log In" AuthForm={AuthForm} />
        </li>
      </ul>
    </div>
  );
};

export default ToggleMenu;
