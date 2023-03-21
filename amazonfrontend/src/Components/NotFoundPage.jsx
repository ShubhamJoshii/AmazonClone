import React from "react";
import AmazonLogo from "../AmazonAssets/AmazonLogoblack.png";
import { RiQuestionLine } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="top-[-60px] z-50 absolute bg-white w-[100vw]">
      <Helmet>
        <title>404 - Document Not Found</title>
      </Helmet>
      <div className="flex justify-center items-center font-bold text-xl mt-4 p-3">
        <img src={AmazonLogo} alt="AmazonLogo" className="w-[150px]" />
        <p>.in</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <RiQuestionLine className="text-[#E47911] font-extrabold text-3xl " />
        <div>
          <p className="text-[#E47911] font-bold text-xl  ">
            Looking for something?
          </p>
          <p className="text-lg">
            We're sorry. The Web address you entered is not a functioning page
            on our site.
          </p>
          <div className="flex items-center font-bold mt-[20px] text-lg">
            <IoMdArrowDropright className="text-[#E47911]" />
            <div>
              <span>Go to Amazon.in's </span>
              <span
                onClick={() => navigate("/")}
                className="text-[#004B91] underline cursor-pointer"
              >
                Home 
              </span>{" "}
              Page{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
