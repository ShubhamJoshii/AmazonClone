import React, { useEffect, useState } from "react";
import amazonLogo from "../../AmazonAssets/AmazonLogoblack.png";
import { IoMdArrowDropright } from "react-icons/io";
import { Helmet } from "react-helmet";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { TiInfoLarge } from "react-icons/ti";
import { BiError } from "react-icons/bi";
const SignIn = () => {
  const [emailError, setEmailError] = useState(false);
  const [show, setShow] = useState(true);
  const [loginData, setloginData] = useState({
    MobileNum: "",
    Password: "",
    keepMeSignin: false,
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setloginData({ ...loginData, [name]: value });
  };

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { MobileNum, Password, keepMeSignin } = loginData;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ MobileNum, Password, keepMeSignin }),
    });
    const Data = await res.json();
    // console.log(res);
    // console.log(Data);
    if (Data.message === "User Password not matched") {
      document.getElementsByClassName("errorLogin")[0].style.display = "flex";
    } else {
      document.getElementsByClassName("errorLogin")[0].style.display = "none";
      navigate("/");
    }
  };

  const ContinueBtnFun = async (e) => {
    const { MobileNum } = loginData;
    const res = await fetch("/userExist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ MobileNum }),
    });
    const data = await res.json();
    console.log(data);
    const a = document.getElementsByClassName("errorLogin")[0].style;
    if (data.message === "User Exists") {
      a.display = "none";
      loginData.MobileNum === "" ? setEmailError(true) : setEmailError(false);
      loginData.MobileNum === "" ? setShow(true) : setShow(false);
    } else {
      a.display = "flex";
    }
  };

  const keepSignin = () => {
    const a = document.getElementById("keepMeSignIn");
    setloginData({ ...loginData, keepMeSignin: a.checked });
  };

  const navigate = useNavigate();
  return (
    <div className="signin top-[-60px] z-50 absolute bg-white w-[100%] overflow-hidden">
      <Helmet>
        <title>Amazon Sign In</title>
      </Helmet>
      <form method="POST" className="grid justify-center p-5">
        <div className="flex items-center justify-center p-2">
          <img src={amazonLogo} alt="AmazonLogo" className="w-[115px]" />
          <p>.in</p>
        </div>
        <div className="errorLogin">
          <BiError className="text-[#E24646] text-[35px]" />
          <div>
            <h1 className="text-[20px] text-[#C40000]">There was a problem</h1>
            <p className="text-sm ">
              We cannot find an account with that email address
            </p>
          </div>
        </div>
        <div id={show === false ? "pageShowEmailPassword" : ""}>
          <div className="w-[350px] border p-5 mt-4">
            <h1 className="font-semibold text-[32px] ">Sign in</h1>
            <p className="font-semibold  text-[13px] ">
              Email or mobile phone number
            </p>
            <input
              type="text"
              className="singinPageBtn border p mb-1 p-1 text-sm w-[100%] rounded"
              id={emailError === true ? "errorEmail" : ""}
              name="MobileNum"
              onChange={handleInput}
            />
            <br />
            <p
              className="text-[#DD0000] text-[10px] font-medium"
              id={emailError === true ? "" : "EmailErrorText"}
            >
              <i className="font-extrabold text-xs">!</i> Enter your email or
              mobile phone number
            </p>
            <div
              className="btnSignIn mt-3 mb-2 text-center cursor-pointer"
              style={{ width: "100%", padding: "2px 10px" }}
              onClick={ContinueBtnFun}
            >
              Continue
            </div>

            <p className="text-[13px] ">
              By continuing, you agree to Amazon's{" "}
              <span className="text-[#1868C0] hover:text-[orange] hover:underline cursor-pointer">
                Conditions of Use
              </span>
              and
              <span className="text-[#1868C0] hover:text-[orange] hover:underline cursor-pointer">
                Privacy Notice
              </span>
              .
            </p>
            <div className="flex items-center mt-8 text-xs font-medium text-[#1868C0]">
              <IoMdArrowDropright />
              <p className=" hover:text-[orange] hover:underline cursor-pointer">
                Need help?
              </p>
            </div>
          </div>
          <div className=" flex items-center mt-[25px] justify-center gap-2 w-[350px] text-xs text-[#565454a2]  ">
            <div className="h-[1px] w-[120px] bg-[#565454a2] "></div>
            <p>New to Amazon?</p>
            <div className="h-[1px] w-[120px] bg-[#565454a2] "></div>
          </div>
          <button
            className="signinPageCreateAccount mt-[15px] text-sm w-[350px] bg-[#E7E9EC] p-1 rounded-sm border-[#A2A6AC]"
            onClick={() => navigate("/register")}
          >
            Create your Amazon account
          </button>
        </div>

        <div id={show === false ? "" : "pageShowEmailPassword"}>
          <div className="w-[350px] border p-5 mt-4 pb-[50px]">
            <h1 className="font-semibold text-[32px] ">Sign in</h1>
            <div className="flex gap-1 text-[13px] mt-1 mb-3">
              <p>{loginData.MobileNum}</p>
              <span className="text-[#1868C0] hover:text-[orange] hover:underline cursor-pointer" onClick={()=>setShow(true)}>
                Change
              </span>
            </div>
            <div className=" flex text-[13px] items-center justify-between ">
              <p className="font-semibold">Password</p>
              <p className="text-[#1868C0] hover:text-[orange] hover:underline cursor-pointer text-xs">
                Forget Password
              </p>
            </div>
            <input
              type="text"
              // onChange={(e)=>setPassword(e.target.value)}
              onChange={handleInput}
              name="Password"
              className="singinPageBtn border p mb-1 p-1 text-sm w-[100%] rounded"
            />
            <br />
            <button
              className="btnSignIn mt-3 mb-2"
              style={{ width: "100%", padding: "2px 10px" }}
              onClick={handleLogin}
            >
              Sign in
            </button>
            <div className="text-[13px] flex gap-1 items-center">
              <input
                type="checkbox"
                value="yes"
                id="keepMeSignIn"
                onClick={keepSignin}
              />
              <label htmlFor="keepMeSignIn">Keep me signed in.</label>
              <p className="text-[#1868C0] hover:text-[orange] hover:underline cursor-pointer">
                Details
              </p>
              <AiFillCaretDown className="text-[10px] " />
            </div>
          </div>
          <div className=" flex items-center mt-[25px] justify-center gap-2 w-[350px] text-xs text-[#565454a2]  ">
            <div className="h-[1px] w-[160px] bg-[#565454a2] "></div>
            <p>or</p>
            <div className="h-[1px] w-[160px] bg-[#565454a2] "></div>
          </div>
          <button className="signinPageCreateAccount mt-[15px] text-sm w-[350px] bg-[#E7E9EC] p-1 rounded-sm border-[#A2A6AC]">
            Get an OTP on your phone
          </button>
          <div className="flex items-center text-[grey] text-xs font-medium mt-3">
            <TiInfoLarge className="text-[#5FAAC6] font-bold text-xl" />
            <p>Message and Data rates may apply.</p>
          </div>
        </div>
      </form>

      <div className="w-[100%] p-4 mt-4 bg-[#FAFAFA] border grid justify-center">
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

export default SignIn;
