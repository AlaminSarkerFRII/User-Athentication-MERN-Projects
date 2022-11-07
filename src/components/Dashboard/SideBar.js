import React from "react";
import { FaHome,FaUserCog,FaQrcode,FaHireAHelper} from "react-icons/fa";
import { RiAdminFill} from "react-icons/ri";
import { AiFillSetting} from "react-icons/ai";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="px-4 py-6 cursor-pointer w-48 h-screen font-semibold  border-2 border-sky-900 text-xl flex flex-col justify-start bg-black text-white  items-start">
      <div className="admins">
        <ul className=" flex flex-col gap-4 justify-center items-center">
          <Link
            to="/dashboard/home"
            className="w-full mx-auto flex flex-row gap-6 justify-center items-center bg-red-400 px-4 rounded-md  "
          >
            <FaHome className="font-bold" />
            <li className="mb-4 hover:text-blue-600 hover:translate-y-1 ease-linear">
              Home
            </li>
          </Link>
          <Link
            to="/dashboard/admin"
            className="w-full mx-auto flex flex-row gap-6 justify-center items-center bg-red-400 px-4 rounded-md  "
          >
            <RiAdminFill className="font-bold "/>
            <li className="mb-4 hover:text-blue-600 hover:translate-y-1 ease-linear">
              Admin
            </li>
          </Link>
          <Link
            to="/dashboard/users"
            className="w-full mx-auto flex flex-row gap-6 justify-center items-center bg-red-400 px-4 rounded-md  "
          >
            <FaUserCog className="font-bold "/>
            <li className="mb-4 hover:text-blue-600 hover:translate-y-1 ease-linear">
              Users
            </li>
          </Link>
          <Link
            to="/dashboard/settings"
            className="w-full mx-auto flex flex-row gap-6 justify-center items-center bg-red-400 px-4 rounded-md  "
          >
            <AiFillSetting className="font-bold " />
            <li className="mb-4 hover:text-blue-600 hover:translate-y-1 ease-linear">
              Settings
            </li>
          </Link>
          <Link
            to="/dashboard/faqs"
            className="w-full mx-auto flex flex-row gap-6 justify-center items-center bg-red-400 px-4 rounded-md  "
          >
            <FaQrcode className="font-bold " />
            <li className="mb-4 hover:text-blue-600 hover:translate-y-1 ease-linear">
              Faqs
            </li>
          </Link>
          <Link
            to="/dashboard/help"
            className="w-full mx-auto flex flex-row gap-6 justify-center items-center bg-red-400 px-4 rounded-md  "
          >
            <FaHireAHelper className="font-bold " />
            <li className="mb-4 hover:text-blue-600 hover:translate-y-1 ease-linear">
              Help
            </li>
          </Link>
        </ul>
      </div>
      <div className="users my-4 ">
        <ul className="w-full flex gap-4 flex-col justify-around items-center ">
        <Link
            to="/dashboard/help"
            className="w-full mx-auto flex flex-row gap-6 justify-center items-center bg-red-400 px-4 rounded-md  "
          >
            <FaHireAHelper className="font-bold " />
            <li className="mb-4 hover:text-blue-600 hover:translate-y-1 ease-linear">
              Help
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
