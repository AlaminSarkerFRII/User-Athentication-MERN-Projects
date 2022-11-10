import React from "react";
import { TbLetterSpacing } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer-main cursor-pointer w-full mx-auto bottom-0 h-60 bg-black text-teal-50">
      <div className="footer-content gap-20 flex flex-col md:flex-row lg:flex-row justify-center items-center">
        <div className="first-container flex flex-col justify-center items-center">
          <TbLetterSpacing className="text-7xl font-bold" />
          <p className="w-1/2 mx-auto">
            Footer logo and Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita, eveniet.
          </p>
        </div>
        <div className="second-container gap-4 flex flex-col justify-center items-center list-none text-xl">
          <li>Home</li>
          <li>Partners</li>
          <li>Terms</li>
          <li>Social Condition</li>
        </div>
        <div className="3rd-container gap-4 flex flex-col justify-center items-center list-none text-xl">
          <li>Home</li>
          <li>Partners</li>
          <li>Terms</li>
          <li>Social Condition</li>
        </div>
        <div className="4th-container gap-4 flex flex-col  justify-center items-center list-none text-xl">
          <li>Home</li>
          <li>Partners</li>
          <li>Terms</li>
          <li>Social Condition</li>
        </div>
      </div>

      <div className=" w-[95%] mx-auto my-10 border-2 border-x-gray-50"></div>
    </div>
  );
};

export default Footer;
