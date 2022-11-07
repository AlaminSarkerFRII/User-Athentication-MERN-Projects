import React from "react";
import SideBar from "./SideBar";
import User from "./User";

const Home = () => {
  return (
    <div className="w-[95%] h-fit my-4 flex justify-start gap-10 ">
      {/* <h2>User Dashboard</h2> */}

      <div className="rounded-md">
        <SideBar />
      </div>
      <div className="rounded-md w-full h-screen md:w-full lg:w-full bg-gray-300">
        <User />
      </div>
    </div>
  );
};

export default Home;
