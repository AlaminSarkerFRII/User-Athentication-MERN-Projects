import React from "react";
import { Link } from "react-router-dom";
import imgsLogo from "../assests/logo.png"

const Navbar = () => {
  return (
    <div className="navbar-container py-2 shadow-xl mt-0 mb-0">
      <div className="content text-xl font-bold flex flex-row sm:flex-auto justify-around items-center">
        <div className="logo">
            <img className="w-16 h-16 rounded-full " src={imgsLogo} alt="logo" />
        </div>
        <div className="items">
          <ul className="gap-6 flex flex-row justify-between items-center">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Workout</Link>
            <Link to="/">Blog</Link>
          </ul>
        </div>
        <div className="sign-in flex flex-shrink-0 flex-row justify-center items-center gap-4">
           <button className="border-2 px-4 py-1 rounded-md bg-red-500 hover:bg-teal-500 text-white ">Sign In </button>
           <button className="border-2 px-4 py-1 rounded-md bg-red-500 hover:bg-teal-500 text-white ">Sign Up </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
