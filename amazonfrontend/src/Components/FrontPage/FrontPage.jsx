import React, {useState } from "react";
import "./FrontPage.css";
import Slider1 from "../../AmazonAssets/Slider1.jpg";
import Slider2 from "../../AmazonAssets/Slider2.jpg";
import Slider3 from "../../AmazonAssets/Slider3.jpg";
import Slider4 from "../../AmazonAssets/Slider4.jpg";
import Slider5 from "../../AmazonAssets/Slider5.jpg";
import Slider6 from "../../AmazonAssets/Slider6.jpg";
import Slider7 from "../../AmazonAssets/Slider7.jpg";
import Slider8 from "../../AmazonAssets/Slider8.jpg";
import Slider9 from "../../AmazonAssets/Slider9.jpg";
import arrowRight from "../../AmazonAssets/arrowRight.png";
import arrowLeft from "../../AmazonAssets/ArrowLeft.png";

const sliderArr = [
  Slider1,
  Slider2,
  Slider3,
  Slider4,
  Slider5,
  Slider6,
  Slider7,
  Slider8,
  Slider9
];

const FrontPage = () => {
  const [count, setcount] = useState(0);
  setTimeout(() => {
    setcount(count < 8 ? count + 1 : 0);
  }, 5000);

  return (
    <div className="FrontPage">
      <div>
        <img src={sliderArr[count]} alt="SliderImg" id="Frontimg" />;
        <div className="absolute top-[70px] flex justify-between p-4 w-[100%] h-[40%]">
          <button
            className="hover:border h-[50%] w-[50px]"
            onClick={() => {
              setcount(count === 0 ? 8 : count - 1);
            }}
          >
            <img src={arrowLeft} alt="arrowleft" className="w-[28px] m-auto" />
          </button>
          <button
            className="hover:border h-[50%] w-[50px]"
            onClick={() => {
              setcount(count === 8 ? 0 : count + 1);
            }}
          >
            <img src={arrowRight} alt="arrowleft" className="w-[28px] m-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
