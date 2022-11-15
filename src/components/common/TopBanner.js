import React from "react";
import "./TopBanner.css";

const TopBanner = () => {
  return (
    <div className="topBanner">
      <div className="top-banner-text">
        <h2 className="text-4xl w-[50%] mx-auto font-bold">
          The best free stock photos, royalty free images & videos shared by
          creators.
        </h2>
        <input className="w-[50%] my-4 border-2 border-gray-500 px-4 py-2 rounded-md outline-none" type="text" placeholder="Search your best dream space here" />

        <p>
          Trending:ocean, christmas tree, family, computer, mountains Photo by
          Francesco Ungaro
        </p>
      </div>
    </div>
  );
};

export default TopBanner;
