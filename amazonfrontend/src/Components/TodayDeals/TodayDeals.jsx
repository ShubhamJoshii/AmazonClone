import React from "react";
import "./TodayDeals.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Deal1 from "../../AmazonAssets/Deal1.jpg";
import Deal2 from "../../AmazonAssets/Deal2.jpg";
import Deal3 from "../../AmazonAssets/Deal3.jpg";
import Deal4 from "../../AmazonAssets/Deal4.jpg";
import Deal5 from "../../AmazonAssets/Deal5.jpg";
import Deal6 from "../../AmazonAssets/Deal6.jpg";
import Deal7 from "../../AmazonAssets/Deal7.jpg";
import Deal8 from "../../AmazonAssets/Deal8.jpg";
import Deal9 from "../../AmazonAssets/Deal9.jpg";
import Deal10 from "../../AmazonAssets/Deal10.jpg";
import Deal11 from "../../AmazonAssets/Deal11.jpg";
import Deal12 from "../../AmazonAssets/Deal12.jpg";
import Deal13 from "../../AmazonAssets/Deal13.jpg";
import Deal14 from "../../AmazonAssets/Deal14.jpg";
import Deal15 from "../../AmazonAssets/Deal15.jpg";

const TodayDealsData = [
  {
    ProductImg: Deal1,
    Link: "#",
    DiscountRate: "Up to 14% off",
    ProductName: "iQOO Neo 7 | Starting 3127/month",
  },
  {
    ProductImg: Deal2,
    Link: "#",
    DiscountRate: "Up to 76% off",
    ProductName: "New Launch JBL Wave at 2999",
  },
  {
    ProductImg: Deal3,
    Link: "#",
    DiscountRate: "Up to 78% off",
    ProductName: "Jaw Dropping Deals on Headsets",
  },
  {
    ProductImg: Deal4,
    Link: "#",
    DiscountRate: "Up to 71% off",
    ProductName: "Upto 50% off on Storage devices",
  },
  {
    ProductImg: Deal5,
    Link: "#",
    DiscountRate: "Up to 56% off",
    ProductName: "Best selling Networking Devices",
  },
  {
    ProductImg: Deal6,
    Link: "#",
    DiscountRate: "Up to 73% off",
    ProductName: "Home Improvement Essentials",
  },
  {
    ProductImg: Deal7,
    Link: "#",
    DiscountRate: "Up to 66% off",
    ProductName: "Top Deals on iBell Power Tools",
  },
  {
    ProductImg: Deal8,
    Link: "#",
    DiscountRate: "Up to 39% off",
    ProductName: "High Performance Desktop Computer…",
  },
  {
    ProductImg: Deal9,
    Link: "#",
    DiscountRate: "Up to 66% off",
    ProductName: "Blaupunkt Bestseller Speakers and So…",
  },
  {
    ProductImg: Deal10,
    Link: "#",
    DiscountRate: "Up to 46% off",
    ProductName: "Best Offers from V-Guard Products",
  },
  {
    ProductImg: Deal11,
    Link: "#",
    DiscountRate: "Up to 87% off",
    ProductName: "Wallpapers and wall art",
  },
  {
    ProductImg: Deal12,
    Link: "#",
    DiscountRate: "Up to 53% off",
    ProductName: "Accessories Days - Blockbuster Deals o…",
  },
  {
    ProductImg: Deal13,
    Link: "#",
    DiscountRate: "Up to 55% off",
    ProductName: "Top Picks on Docoss",
  },
  {
    ProductImg: Deal14,
    Link: "#",
    DiscountRate: "Up to 55% off",
    ProductName: "Kitchen Products Amazon Brands and…",
  },
  {
    ProductImg: Deal15,
    Link: "#",
    DiscountRate: "Up to 71% off",
    ProductName: "Best of Smart Bulbs",
  },
];

const TodayDeals = () => {
  const slideLeft = () => {
    window.scrollTo(1000, 1000);
    document.getElementsByClassName("scrollSellers").style.left = "100px";
    console.log("Hello ");
  };
  const slideRight = () => {
    console.log("Hello");
  };

  return (
    <div className="bg-white mx-5 my-[30px] p-4">
      <div className="flex items-center">
        <h1 className="text-xl font-bold p-4">Today’s Deals</h1>
        <div className="px-4 font-semibold text-sm text-[#037386] cursor-pointer hover:text-[brown] hover:underline">See all deals</div>
      </div>
      <div className="scrollSellers overflow-hidden flex hover:overflow-x-scroll gap-1">
        {TodayDealsData.map((curr,id) => {
          return (
            <div className="h-[270px] bg-[#F7F8F8]  aspect-square mb-4" key={id}>
              <a href={curr.Link} className="h-[220px]">
                <img
                  src={curr.ProductImg}
                  alt="ProductImage"
                  className="h-[200px] m-auto mix-blend-multiply"
                />
              </a>
              <div className="flex mt-3 mb-1 text-xs font-bold gap-2">
                <p className="bg-[#CC0C39] px-2 py-[2px]  rounded text-white">
                  {curr.DiscountRate}
                </p>
                <p className="text-[#CC0C39] ">Deal of the Day</p>
              </div>
              <h2 className="text-sm font-medium ">{curr.ProductName}</h2>
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

export default TodayDeals;
