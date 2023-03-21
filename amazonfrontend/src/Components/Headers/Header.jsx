import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

import amazonLogo from "../../AmazonAssets/AmazonLogo.png";
import inFlag from "../../AmazonAssets/InFlag.png";
import { IoMdArrowDropdown } from "react-icons/io";
import cartLogo from "../../AmazonAssets/cartLogo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrSearch } from "react-icons/gr";
const Data = [
  {
    Category: "All Categories",
  },
  {
    Category: "Alexa Skills",
  },
  {
    Category: "Amazon Devices",
  },
  {
    Category: "Amazon Fashion",
  },
  {
    Category: "Amazon Fresh",
  },
  {
    Category: "Amazon Pharmacy",
  },
  {
    Category: "Appliances",
  },
  {
    Category: "Apps & Games",
  },
  {
    Category: "Baby",
  },
  {
    Category: "Beauty",
  },
  {
    Category: "Books",
  },
  {
    Category: "Car & Motorbike",
  },
  {
    Category: "Clothing & Accessories",
  },
  {
    Category: "Collectibles",
  },
  {
    Category: "Computer & Accessories",
  },
  {
    Category: "Deals",
  },
  {
    Category: "Electronics",
  },
  {
    Category: "Furniture",
  },
  {
    Category: "Gardern & Outdoors",
  },
  {
    Category: "Gift Cards",
  },
  {
    Category: "Grocery & Gourmet Foods",
  },
  {
    Category: "Home & Kitchen",
  },
  {
    Category: "Industrial & Scienfic",
  },
  {
    Category: "Jewellery",
  },
  {
    Category: "Kindle Store",
  },
  {
    Category: "Luggage & Bags",
  },
  {
    Category: "Luxury Beauty",
  },
  {
    Category: "Movies & TV Shows",
  },
  {
    Category: "Music",
  },
  {
    Category: "Musical Instruments",
  },
  {
    Category: "Office Products",
  },
  {
    Category: "Pet Supplies",
  },
  {
    Category: "Prime Video",
  },
  {
    Category: "Same-Day Delivery",
  },
  {
    Category: "Shoes & Handbags",
  },
  {
    Category: "Software",
  },
  {
    Category: "Sports, Fitness & Outdoors",
  },
  {
    Category: "Subscribe & Save",
  },
  {
    Category: "Tools & Home Improvement",
  },
  {
    Category: "Toyes & Games",
  },
  {
    Category: "Under 500",
  },
  {
    Category: "Video Games",
  },
  {
    Category: "Watches",
  },
];

const languageRegion = [
  {
    short: "EN",
    long: "English",
  },
  {
    short: "HI",
    long: "हिन्दी",
  },
  {
    short: "TA",
    long: "தமிழ்",
  },
  {
    short: "TE",
    long: "తెలుగు",
  },
  {
    short: "KN",
    long: "ಕನ್ನಡ",
  },
  {
    short: "ML",
    long: "മലയാളം",
  },
  {
    short: "BN",
    long: "বাংলা",
  },
  {
    short: "MR",
    long: "मराठी",
  },
];

const YourAccountData = [
  {
    text: "Your Account",
    link: "",
  },
  {
    text: "Your Orders",
    link: "",
  },
  {
    text: "Your Wish List",
    link: "",
  },
  {
    text: "Your Recommendation",
    link: "",
  },
  {
    text: "Your Prime Membership",
    link: "",
  },
  {
    text: "Your Prime Video",
    link: "",
  },
  {
    text: "Your Subscribe & Save Items",
    link: "",
  },
  {
    text: "Membership & Subscriptions",
    link: "",
  },
  {
    text: "Your Free Amazon Business Account",
    link: "",
  },
  {
    text: "Your Seller Account",
    link: "",
  },
  {
    text: "Manage Your Content and Devices",
    link: "",
  },
];

const Header = ({ userLogin, setuserLogin }) => {
  const [searchBlack, setSearchBlack] = useState(false);
  const [userLoginData, setuserLoginData] = useState("");
  
  const loading = async () => {
    const res = await fetch("/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    
    
    const Data = await res.json();
    // console.log(Data);
    setuserLogin(true);
    setuserLoginData(Data);
  };
  
  
  
  const signOut =async () => {
    await fetch("/logout",{
      method:"GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    .then(() => {
      navigate("/");
      window.location.reload(false);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  useEffect(()=>{
    loading();
  },[])
  
  const navigate = useNavigate();
  return (
    <div className="Header fixed z-10 w-[100%]">
    <div className="flex items-center hover:border min-w-[60px] pl-1 pr-1 gap-0 min-h-[50px] justify-center cursor-pointer">
    <img src={amazonLogo} className="h-[35px]" alt="Logo" />
    <p className="mb-1">.in</p>
      </div>
      <div className="flex items-center gap-2 hover:border pl-2 pr-2 min-h-[50px] justify-center cursor-pointer">
        <HiOutlineLocationMarker className="text-xl " />
        <div>
          <p className="text-xs text-[#fdfdfdbb]">
            {userLogin ? userLoginData.Name : "Hello"}
          </p>
          <h3 className="font-semibold text-[14px]">Select your address</h3>
        </div>
      </div>
      <div
        className="searchBarHeader focus-within:border-[#FEBD69] border-[3px] w-[48vw] bg-white h-[40px] rounded overflow-hidden flex items-center justify-between "
        onClick={() => setSearchBlack(!searchBlack)}
      >
        <select
          name="productCategory"
          className="text-black bg-[#F3F3F3] h-[100%] w-[15%] font-thin text-xs"
        >
          {Data.map((curr) => {
            return <option value={curr.Category}>{curr.Category}</option>;
          })}
        </select>
        <input
          type="search"
          name=""
          placeholder="Search Amazon.in"
          className="w-[77%] text-black"
        />
        <button className="bg-[#FEBD69] h-[100%] w-[40px]">
          <GrSearch className="m-auto font-bold text-xl" />
        </button>
      </div>
      <div className="langRegion">
        <div className="hover:border pr-2 pl-2 flex gap-1 min-h-[50px] justify-center items-center cursor-pointer">
          <img src={inFlag} alt="IndiaFlag" width="20px" />
          <p>EN</p>
          <IoMdArrowDropdown className="mt-1" />
        </div>
        <div
          id="langRegionHover"
          className="absolute z-50 text-black p-4 bg-[#fff] w-[270px] top-[50px] border rounded"
        >
          <div className="arrows bg-[#fff] w-4 h-4 absolute rotate-45  top-[-5px] left-12"></div>
          {languageRegion.map((curr) => {
            return (
              <div className="py-1 flex items-center pl-2 hover:text-[#F08804] hover:underline font-bold ">
                <input
                  type="radio"
                  name="LangRegionDrop"
                  className="cursor-pointer"
                  id={curr.short}
                />
                <label
                  htmlFor={curr.short}
                  className="pl-3 cursor-pointer text-sm"
                >
                  {curr.long} - {curr.short}
                </label>
                <br />
              </div>
            );
          })}
          <p className="text-[#0066C0] text-sm pb-3 border-b-2 cursor-pointer hover:underline ">
            Learn more
          </p>
          <div className="flex items-center pb-3 pt-2">
            <img src={inFlag} alt="inflag" className="h-7" />
            <p className="text-sm pl-2">You are shopping on Amazon.in</p>
          </div>
          <p className="text-[#0066C0]  hover:underline cursor-pointer">
            Change country/region.
          </p>
        </div>
      </div>
      <div className="AccountHeader hover:border pl-2 pr-2 flex flex-col min-h-[50px] justify-center cursor-pointer ">
        <p className="text-xs text-white">Hello, {userLogin ? userLoginData.Name : "sign in"}</p>
        <p className="text-white font-semibold flex text-[14px]">
          Accounts & Lists <IoMdArrowDropdown className="mt-1" />
        </p>
        <div className="AccountHover z-50 absolute top-[55px] right-20 bg-[#fff] text-black border p-5 w-[550px] rounded">
          <div className="arrows bg-[#fff] w-4 h-4 absolute rotate-45  top-[-5px] right-44"></div>
          <div
            className="text-center"
            style={
              userLogin === true ? { display: "none" } : { display: "block" }
            }
          >
            <button className="btnSignIn" onClick={() => navigate("/signin")}>
              Sign in
            </button>
            <p className="text-xs pt-2 pb-3 border-b">
              New customer?{" "}
              <span
                className="text-[#0066C0] hover:text-[#F08804] hover:underline"
                onClick={() => navigate("/register")}
              >
                Start here.
              </span>
            </p>
          </div>
          <div className="flex justify-between pt-3">
            <ul className="p-4 leading-6 border-r w-[50%]">
              <b className="text-xl">Your Lists</b>
              <div className="text-sm">
                <li className="hover:text-[#F08804] hover:underline">
                  Create a Wish List
                </li>
                <li className="hover:text-[#F08804] hover:underline">
                  Wish from Any Website
                </li>
                <li className="hover:text-[#F08804] hover:underline">
                  Baby Wishlist
                </li>
                <li className="hover:text-[#F08804] hover:underline">
                  Discover Your Style
                </li>
                <li className="hover:text-[#F08804] hover:underline">
                  Explore Showroom
                </li>
              </div>
            </ul>
            <ul className="p-4 leading-6 ">
              <b className="text-xl">Your Account</b>
              <div className="text-sm">
                {YourAccountData.map((curr) => {
                  return (
                    <li className="hover:text-[#F08804] hover:underline">
                      {curr.text}
                    </li>
                  );
                })}
                <div className="border-t mt-2 pt-2" style={userLogin ? {display:"block"}:{display:"none"}}>
                <li className="hover:text-[#F08804] hover:underline">
                Switch Accounts
                </li>
                <li className="hover:text-[#F08804] hover:underline" onClick={signOut}>
                Sign Out
                </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="hover:border pl-2 pr-2 flex flex-col min-h-[50px] justify-center cursor-pointer">
        <p className="text-xs text-white">Returns</p>
        <p className="text-white font-semibold"> & Orders</p>
      </div>
      <div className="flex hover:border pl-2 pr-2 flex-row min-h-[50px] justify-center cursor-pointer items-center" onClick={()=>navigate("/carts")}>
        <p className="text-[#F08804] font-semibold text-lg absolute top-2 mr-5">
          0
        </p>
        <img src={cartLogo} alt="cartLogo" className="h-[30px]" />
        <p>Cart</p>
      </div>
      <div
        className="absolute bg-[#000000cc]  w-[100vw] h-[100vh] top-[100px] left-0 "
        style={
          searchBlack === true ? { display: "block" } : { display: "none" }
        }
      ></div>
    </div>
  );
};

export default Header;
