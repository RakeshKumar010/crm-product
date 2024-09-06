import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function PhotoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[97vw] mx-auto bg-black px-2">
      <Slider className=" bg-black" {...settings}>
        <div>
          <img
          className="w-full bg-black"
            src="https://s3no.cashify.in/estore/93113e109fe24a96a3d3e9c8257d1828.webp?p=default&s=lg"
            alt=""
          />
        </div>
        <div>
          <img
          className="w-full bg-black"
            src="https://s3no.cashify.in/estore/93113e109fe24a96a3d3e9c8257d1828.webp?p=default&s=lg"
            alt=""
          />
        </div>
        <div>
          <img
          className="w-full bg-black"
            src="https://s3no.cashify.in/estore/93113e109fe24a96a3d3e9c8257d1828.webp?p=default&s=lg"
            alt=""
          />
        </div>
      </Slider>
      </div>
    
  );
}

export default PhotoSlider;
