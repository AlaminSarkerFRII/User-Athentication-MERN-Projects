import { format } from "date-fns";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import imgsLogo from "../assests/logo.png";

const Navbar = () => {
  // change navbar on scroll

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >=30) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  //<==========time set==========>

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <div className={ color ? 'navbar-container shadow-xl text-center py-2 top-0 mb-0 sticky bg-cyan-500 text-white' :'shadow-none py-0' }>
      <div className="text-xl font-bold flex flex-wrap justify-around items-center">
        <div className="flex justify-center items-center gap-6 ">
          <img
            className="w-16 hidden sm:block rounded-full "
            src={imgsLogo}
            alt="logo"
          />

          <h1 className="transition-all text-blue-600">
            {`${format(time, "HH:mm:ss")}`}
          </h1>
        </div>
        <div className="gap-10 flex flex-wrap justify-between items-center ">
          <Link
            className="hover:border-b-4 hover:border-b-blue-500 hover:-translate-y-2 hover:ease-linear"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:border-b-4 hover:border-b-blue-500 hover:-translate-y-2 hover:ease-linear"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:border-b-4 hover:border-b-blue-500 hover:-translate-y-2 hover:ease-linear"
            to="/workouts"
          >
            Workout
          </Link>
          <Link
            className="hover:border-b-4 hover:border-b-blue-500 hover:-translate-y-2 hover:ease-linear"
            to="/blogs"
          >
            Blog
          </Link>
          <Link
            className="hover:border-b-4 hover:border-b-blue-500 hover:-translate-y-2 hover:ease-linear"
            to="/addWorkout"
          >
            Add Workout
          </Link>
          <Link
            className="hover:border-b-4 hover:border-b-blue-500 hover:-translate-y-2 hover:ease-linear"
            to="/dashboard"
          >
            Dashboard
          </Link>
        </div>
        <div className="sign-in flex flex-shrink-0 gap-4 flex-col lg:flex-row justify-center items-center">
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
