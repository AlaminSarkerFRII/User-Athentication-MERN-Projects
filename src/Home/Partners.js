import React from "react";
import Slider from "react-slick";
import logo1 from "../assests/casinohexdk.png";
import logo2 from "../assests/kasinot-fi.png";
import logo3 from "../assests/thecasinodb.png";
import logo4 from "../assests/keepsolid.png";
import logo5 from "../assests/nettikasinot.png";

const Partners = () => {
  const settings = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 4000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // images

  const images = [
    {
      url: logo1,
    },
    {
      url: logo2,
    },

    {
      url: logo3,
    },
    {
      url: logo4,
    },
    {
      url: logo5,
    },
  ];

  return (
    <div className="my-20 w-4/12 mx-auto overflow-hidden">
      <h2 className="text-4xl font-bold my-4">Our Client & Partners </h2>
      <Slider {...settings}>
        {images.map((image) => (
          <div className="w-1/2 mx-0 flex flex-row justify-center items-center">
            <img className="w-20 h-20 mx-auto" src={image.url} alt="partner" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;
