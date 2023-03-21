import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import headerLiImg from "../../AmazonAssets/headerLi.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import PrimeHeader from "../../AmazonAssets/PrimeHeader.jpg";
// import NavbarSide from "./NavbarSide";

import "./Header2.css";
const Header2 = ({ setAllHeader, allHeader }) => {
  return (
    <div className="Header2 bg-[#232F3E] p-1 overflow-hidden text-white w-[100%]">
      <ul className="flex items-center text-sm font-semibold gap-2">
        <li
          className="flex items-center gap-1 hover:border h-8 pr-2 pl-2  cursor-pointer"
          onClick={() => {
            setAllHeader(!allHeader);
          }}
        >
          <GiHamburgerMenu />
          All
        </li>
        <li className="hover:border h-8 pr-2 pl-2 flex items-center  cursor-pointer">
          Sell
        </li>
        <li className="hover:border h-8 pr-2 pl-2 flex items-center cursor-pointer">
          Amazon miniTV
        </li>
        <li className="hover:border h-8 pr-2 pl-2 flex items-center cursor-pointer">
          Best Sellers
        </li>
        <li className="hover:border h-8 pr-2 pl-2 flex cursor-pointer items-center">
          Mobiles
        </li>
        <li className="hover:border h-8 pr-2 pl-2 flex  cursor-pointer items-center">
          Customer Service
        </li>
        <li className="hover:border h-8 pr-2 pl-2 flex  cursor-pointer items-center">
          Today's Deals
        </li>
        <li className="hover:border h-8 pr-2 pl-2 flex  cursor-pointer items-center">
          Electronics
        </li>
        <li className="PrimeHeaderHover flex items-center hover:border h-8 pr-2 pl-2 cursor-pointer">
          Prime <IoMdArrowDropdown className="mt-1" />
          <div className="PrimeHeader z-50 absolute top-[40px] bg-[#fff] p-[15px] h-[350px] aspect-auto">
            <div className="absolute top-[-5px] bg-[#fff] w-4 h-4 rotate-45 left-10"></div>
            <img src={PrimeHeader} alt="PrimeHeader" className="h-[320px]" />
          </div>
        </li>
        <li className="hover:border h-8 pr-2 pl-2 flex items-center cursor-pointer">
          Amazon Pay
        </li>
        <li className="hover:border h-8 pr-2 pl-2 flex  cursor-pointer items-center">
          Fashion
        </li>
        <li className="hover:border h-8 pr-2 pl-2 flex items-center cursor-pointer">
          New Releases
        </li>
        <li className="header2Img hover:border h-8 pr-2 pl-2 flex items-center cursor-pointer absolute right-0 overflow-hidden">
          <img src={headerLiImg} className="h-8" alt="headerLiImg" />
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Header2;
