import React from "react";
import { FaHome, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Signup from "./signup/Signup";

const NavBar = () => {
  return (
    <nav className="  ">
      <div className="container mx-auto flex justify-between items-center">
    

        
        <ul className="flex space-x-6">
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
            <FaHome />
            <span><NavLink to='/' >Home</NavLink></span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
            <FaUser />
            <span><NavLink to='/' >Profile</NavLink></span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
            <FaHeart />
            <span><NavLink to='/' >WishList</NavLink></span>
          </li>
          <li className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
            <FaShoppingCart />
            <span>Cart</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
