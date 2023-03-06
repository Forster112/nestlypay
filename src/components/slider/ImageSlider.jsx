import React from "react";
import Slider from "react-slick";

import slider1 from "../../assets/images/A.png";
import slider2 from "../../assets/images/A-1.png";
import slider3 from "../../assets/images/B.png";
import slider4 from "../../assets/images/B-2.png";
import slider5 from "../../assets/images/B-3.png";
import slider6 from "../../assets/images/C.png";
import slider7 from "../../assets/images/C-1.png";
import slider8 from "../../assets/images/C-3.png";
import slider9 from "../../assets/images/D.png";
import slider10 from "../../assets/images/D-2.png";

import "../../styles/imageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  
  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="avatar" />
        </div>
        <div>
          <img src={slider2} alt="avatar" />
        </div>
        <div>
          <img src={slider3} alt="avatar" />
        </div>
        <div>
          <img src={slider4} alt="avatar" />
        </div>
        <div>
          <img src={slider5} alt="avatar" />
        </div>
        <div>
          <img src={slider6} alt="avatar" />
        </div>
        <div>
          <img src={slider7} alt="avatar" />
        </div>
        <div>
          <img src={slider8} alt="avatar" />
        </div>
        <div>
          <img src={slider9} alt="avatar" />
        </div>
        <div>
          <img src={slider10} alt="avatar" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
