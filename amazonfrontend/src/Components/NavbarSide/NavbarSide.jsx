import React from "react";
import userLogo from "../../AmazonAssets/userLogo.png";
import { RxCross2 } from "react-icons/rx";
import NavbarTemplate from "./NavbarTemplate";
import navbarAllData from "./NavbarData";

const NavbarSide = ({ setAllHeader, allHeader }) => {
  return (
    <div
      className="bg-[#000000cc] fixed z-50 w-[100vw] h-[100vh] top-0"
      style={allHeader === true ? { width: "100vw" } : { width: "0vw" }}
    >
      <div
        className="absolute text-black w-[350px] overflow-hidden top-0 h-[100vh] bg-[#fff]"
        style={
          allHeader === true
            ? { left: "0px", transition: "0.5s" }
            : { left: "-400px", transition: "0.5s" }
        }
      >
        <div className="fixed top-0 w-[350px]">
          <RxCross2
            className="absolute text-white text-4xl left-[370px] top-2 cursor-pointer"
            onClick={() => {
              setAllHeader(!allHeader);
            }}
          />
          <div className="bg-[#232F3E] text-white flex h-[55px] w-[359.5px] items-center pl-[20px]">
            <img src={userLogo} alt="userlogo" className="h-8" />
            <h1 className="text-xl font-bold pl-3">Hello, sign in</h1>
          </div>
        </div>
        <div className="fixed top-[55px] h-[92vh] overflow-y-scroll overflow-hidden ">
          {navbarAllData.map((curr, id) => {
            return (
              <NavbarTemplate
                Topic={curr.Topic}
                ShortName={curr.ID}
                Tdata={curr.Data}
                key={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarSide;
