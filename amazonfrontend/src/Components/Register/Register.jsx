import React, { useState} from "react";
import "./Register.css";
import amazonLogo from "../../AmazonAssets/AmazonLogoblack.png";
import { Helmet } from "react-helmet";
import { TiInfoLarge } from "react-icons/ti";
import CountryCode from "./CountryCode";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import {useNavigate} from "react-router-dom";
const Register = () => {
  // console.log(CountryCode);
  const [countryCodeDis, setcountryCodeDis] = useState(false);
  const [selectedCode, setSelectedCode] = useState("In +91");
  const [RegisterData, setRegisterData] = useState({
    Name: "",
    CountryCode: "",
    MobileNum: "",
    Password: "",
  });

  const navigate = useNavigate();
  const handleRegister = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterData({ ...RegisterData, [name]: value });
  };

  const selectedCoutnryCode = (e) => {
    setSelectedCode(e.target.name);
    // console.log(e.target.name);
    e.target.name = "CountryCode";
    handleRegister(e);
    setcountryCodeDis(false);
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { Name, CountryCode, MobileNum, Password } = RegisterData;
    console.log(RegisterData);
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, CountryCode, MobileNum, Password }),
    });
    const Data = await res.json();
    console.log(Data);
  };

  // useEffect(() => {
  //   console.log(RegisterData);
  // }, [RegisterData])

  return (
    <div className="registerPage top-[-60px] z-50 absolute bg-white w-[100vw]">
      <Helmet>
        <title>Amazon Registration</title>
      </Helmet>
      <form method="POST" className="grid justify-center p-5">
        <div className="flex items-center justify-center">
          <img src={amazonLogo} alt="AmazonLogo" className="w-[115px]" />
          <p>.in</p>
        </div>
        <div className="w-[350px] border p-5 mt-4">
          <h1 className="text-[30px]">Create Account</h1>
          <p className="font-semibold  text-[13px] mt-4">Your name</p>
          <input
            type="text"
            name="Name"
            placeholder="First and last name"
            className="border p mb-1 p-1 text-sm w-[100%] rounded"
            onChange={handleRegister}
          />
          <p className="font-semibold  text-[13px] mt-4">Mobile number</p>
          <div className="flex gap-2">
            <div className="border flex items-center justify-center bg-[#E8EAED] w-[70px] text-[13px] h-7">
              <p className="">{selectedCode}</p>
              <div
                className="bg-[#E8EAED]"
                onClick={() => setcountryCodeDis(true)}
              >
                <AiFillCaretUp className="text-[10px]" />
                <AiFillCaretDown className="text-[10px]" />
              </div>
            </div>
            <div
              className="absolute bg-white h-[300px] w-[200px] overflow-y-scroll border border-[#CCCCCC] text-sm rounded"
              style={
                countryCodeDis === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {CountryCode.map((curr) => {
                let values = curr.name + " " + curr.dial_code;
                let displayValue = curr.code + " " + curr.dial_code;
                return (
                  <input
                    type="text"
                    className="hover:bg-[#F3F3F3] hover:border-l border-[#E77600] px-4 py-[2px] cursor-pointer"
                    onClick={selectedCoutnryCode}
                    name={displayValue}
                    // name="CountryCode"
                    value={values}
                    // onChange={handleRegister}
                  />
                );
              })}
            </div>
            <input
              type="text"
              placeholder="Mobile number"
              className="border p mb-1 p-1 text-sm w-[100%] rounded"
              name="MobileNum"
              onChange={handleRegister}
            />
          </div>
          <p className="font-semibold  text-[13px] mt-4">Password</p>
          <input
            type="text"
            placeholder="At least 6 characters"
            name="Password"
            className="border p mb-1 p-1 text-sm w-[100%] rounded"
            onChange={handleRegister}
          />
          <div className="flex items-center text-[grey] text-xs font-medium mt-1 mb-4">
            <TiInfoLarge className="text-[#5FAAC6] font-bold text-lg" />
            <p>Passwords must be at least 6 characters.</p>
          </div>
          <p className="text-[13px] text-[#111111]">
            By enrolling your mobile phone number, you consent to receive
            automated security notifications via text message from Amazon.
            Message and data rates may apply.
          </p>
          <button
            className="btnSignIn mt-3 mb-2"
            style={{ width: "100%", padding: "2px 10px" }}
            onClick={registerUser}
          >
            Continue
          </button>
          <div className="text-[13px] flex gap-1">
            <p>Already have an account? </p>
            <button className="text-[#1868C0] hover:text-[orange] hover:underline cursor-pointer" onClick={()=>navigate("/signin")}>
              Sign in
            </button>
          </div>
          <div className="text-[13px] flex gap-1">
            <p>Buying for work? </p>
            <button className="text-[#1868C0] hover:text-[orange] hover:underline cursor-pointer">
              Create a free business account
            </button>
          </div>
          <div className="text-[13px] mt-6">
            <span>
              By creating an account or logging in, you agree to Amazon’s{" "}
            </span>
            <span className="text-[#1868C0] hover:text-[orange] hover:underline cursor-pointer">
              Conditions of Use
            </span>
            <span> and </span>
            <span className="text-[#1868C0] hover:text-[orange] hover:underline cursor-pointer">
              Privacy Notice
            </span>
            .
          </div>
        </div>
      </form>
      <div className=" p-4 mt-4 bg-[#FAFAFA] border grid justify-center">
        <ol className="flex w-[300px] justify-center font-semibold text-xs gap-8 text-[#1868C0] ">
          <li className="hover:text-[orange] cursor-pointer">
            Conditions of Use
          </li>
          <li className="hover:text-[orange] cursor-pointer">Privacy Notice</li>
          <li className="hover:text-[orange] cursor-pointer">Help</li>
        </ol>
        <p className="text-xs flex justify-center">
          ©️ 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Register;
