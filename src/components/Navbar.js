import React from "react";
import { Link } from "react-router-dom";
import imgsLogo from "../assests/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container text-center  py-2 shadow-xl mt-0 mb-0">
      <div className="text-xl font-bold flex flex-wrap justify-around items-center">
        <div className="logo ">
          <img
            className="w-16 h-16 hidden sm:block rounded-full "
            src={imgsLogo}
            alt="logo"
          />
        </div>
        <div className="gap-10 flex flex-wrap justify-between items-center ">
          <Link className="hover:border-b-4 hover:border-b-blue-500 hover:border-b-translate-y-2 hover:-translate-y-2 hover:ease-linear" to="/">Home</Link>
          <Link className="hover:border-b-4 hover:border-b-blue-500 hover:border-b-translate-y-2 hover:-translate-y-2 hover:ease-linear" to="/about">About</Link>
          <Link className="hover:border-b-4 hover:border-b-blue-500 hover:border-b-translate-y-2 hover:-translate-y-2 hover:ease-linear" to="/workouts">Workout</Link>
          <Link className="hover:border-b-4 hover:border-b-blue-500 hover:border-b-translate-y-2 hover:-translate-y-2 hover:ease-linear" to="/blogs">Blog</Link>
          <Link className="hover:border-b-4 hover:border-b-blue-500 hover:border-b-translate-y-2 hover:-translate-y-2 hover:ease-linear" to="/addWorkout">Add Workout</Link>
          <Link className="hover:border-b-4 hover:border-b-blue-500 hover:border-b-translate-y-2 hover:-translate-y-2 hover:ease-linear" to="/dashboard">Dashboard</Link>
        </div>
        <div className="sign-in flex flex-shrink-0 flex-col lg:flex-row justify-center items-center">
          <Link
            to="/login"
            className="border-2 px-4 py-1 rounded-md bg-red-500 hover:bg-teal-500 text-white "
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="border-2 px-4 py-1 rounded-md bg-red-500 hover:bg-teal-500 text-white "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
