import React from "react";
import "./Furniture.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import Furniture1 from "../../AmazonAssets/Furniture.jpg";
import Furniture2 from "../../AmazonAssets/Furniture2.jpg";
import Furniture3 from "../../AmazonAssets/Furniture3.jpg";
import Furniture4 from "../../AmazonAssets/Furniture4.jpg";
import Furniture5 from "../../AmazonAssets/Furniture5.jpg";
import Furniture6 from "../../AmazonAssets/Furniture6.jpg";
import Furniture7 from "../../AmazonAssets/Furniture7.jpg";
import Furniture8 from "../../AmazonAssets/Furniture8.jpg";
import Furniture9 from "../../AmazonAssets/Furniture9.jpg";
import Furniture10 from "../../AmazonAssets/Furniture10.jpg";
import Furniture11 from "../../AmazonAssets/Furniture11.jpg";
import Furniture12 from "../../AmazonAssets/Furniture12.jpg";
import Furniture13 from "../../AmazonAssets/Furniture13.jpg";
import Furniture14 from "../../AmazonAssets/Furniture14.jpg";
import Furniture15 from "../../AmazonAssets/Furniture15.jpg";
import Furniture16 from "../../AmazonAssets/Furniture16.jpg";
import Furniture17 from "../../AmazonAssets/Furniture17.jpg";
import Furniture18 from "../../AmazonAssets/Furniture18.jpg";
import Furniture19 from "../../AmazonAssets/Furniture19.jpg";
// import Furniture from "../../AmazonAssets/Furniture.jpg";

const FurnitureData = [
  {
    Img: Furniture1,
    Link: "#",
  },
  {
    Img: Furniture2,
    Link: "#",
  },
  {
    Img: Furniture3,
    Link: "#",
  },
  {
    Img: Furniture4,
    Link: "#",
  },
  {
    Img: Furniture5,
    Link: "#",
  },
  {
    Img: Furniture6,
    Link: "#",
  },
  {
    Img: Furniture7,
    Link: "#",
  },
  {
    Img: Furniture8,
    Link: "#",
  },
  {
    Img: Furniture9,
    Link: "#",
  },
  {
    Img: Furniture10,
    Link: "#",
  },
  {
    Img: Furniture11,
    Link: "#",
  },
  {
    Img: Furniture12,
    Link: "#",
  },
  {
    Img: Furniture13,
    Link: "#",
  },
  {
    Img: Furniture14,
    Link: "#",
  },
  {
    Img: Furniture15,
    Link: "#",
  },
  {
    Img: Furniture16,
    Link: "#",
  },
  {
    Img: Furniture17,
    Link: "#",
  },
  {
    Img: Furniture18,
    Link: "#",
  },
  {
    Img: Furniture19,
    Link: "#",
  },
];

const Furniture = () => {
  const slideLeft = () => {
    window.scrollTo(1000, 1000);
    document.getElementsByClassName("scrollSellers").style.left = "100px";
    console.log("Hello ");
  };
  const slideRight = () => {
    console.log("Hello");
  };
  return (
    <div className="bg-white mx-5 my-[30px] p-4 h-[305px]">
      <div className="flex items-center">
        <h1 className="text-xl font-bold p-4">
          Up to 60% off | Curated furniture picks for your home
        </h1>
        <div className="px-4 font-semibold text-sm text-[#037386] cursor-pointer hover:underline hover:text-[brown]">
          Visit the store
        </div>
      </div>
      <div className="scrollSellers overflow-hidden flex hover:overflow-x-scroll gap-1">
        {FurnitureData.map((curr,id)  => {
          return (
            <div className="h-[200px] aspect-square mb-4" key={id}>
              <a href={curr.Link}>
                <img
                  src={curr.Img}
                  alt="ProductImage"
                  className="h-[200px] m-auto"
                />
              </a>
            </div>
          );
        })}
        <div className="absolute flex items-center h-[200px]">
          <AiOutlineLeft
            className="bg-white absolute left-[5px] w-[40px] h-[90px] shadow-lg cursor-pointer"
            onClick={slideLeft}
          />
        </div>
        <div className="absolute right-[40px] flex items-center h-[200px]">
          <AiOutlineRight
            className="bg-white w-[40px] h-[90px] shadow-lg cursor-pointer"
            onClick={slideRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Furniture;
