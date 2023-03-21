import React, { useState } from "react";
import Footer from "../Footer/Footer";
import CartImg from "./cart.png";
import LoginPage from "../SigninPage/SigninPage";
import { useNavigate } from "react-router-dom";
const Carts = ({ userLogin, setuserLogin }) => {
  const navigate = useNavigate();
  const [saveforLater, setSaveforLater] = useState(true);
  return (
    <div className="bg-[#EAEDED] py-8 carts">
      {!userLogin ? (
        <div>
          <div className="bg-white w-[70%] mx-6 px-4 py-12 flex gap-7">
            <div>
              <img src={CartImg} alt="CartImg" className="w-[350px]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold ">Your Amazon Cart is empty</h1>
              <p className="text-[#007590] text-sm mb-3 ">Shop today’s deals</p>
              <button
                className="bg-[#FFD814] py-1 px-2 mr-5 rounded-lg "
                onClick={() => navigate("/signin")}
              >
                Sign in to your account
              </button>
              <button
                className="border rounded-lg px-2 py-1"
                onClick={() => navigate("/register")}
              >
                Sign up now
              </button>
            </div>
          </div>
          <div className="bg-white w-[70%] mx-6 my-5 px-4 py-12"></div>
        </div>
      ) : (
        <>
        <div className="bg-white w-[70%] mx-6 my-5 px-4 py-6">
          <h1 className="text-3xl ">Your Amazon Cart is empty.</h1>
          <p className="text-sm mt-2">
            Your shopping cart is waiting. Give it purpose – fill it with
            groceries, clothing, household supplies, electronics and more.
          </p>
          <p className="text-sm ">
            Continue shopping on the{" "}
            <span
              onClick={() => navigate("/")}
              className="text-[#187E99] cursor-pointer hover:text-[brown] hover:underline"
            >
              Amazon.in homepage
            </span>
            , learn about{" "}
            <span
              onClick={() => navigate("/")}
              className="text-[#187E99] cursor-pointer hover:text-[brown] hover:underline"
            >
              today's deals
            </span>
            , or visit your{" "}
            <span
              onClick={() => navigate("/")}
              className="text-[#187E99] cursor-pointer hover:text-[brown] hover:underline"
            >
              Wish List
            </span>
            .
          </p>
        </div>
        <div className="bg-white w-[70%] mx-6 my-5 px-4 py-6 min-h-[150px]">
          <h1 className="text-2xl font-bold mb-4">Your Items</h1>
          <div className="flex gap-[25px] text-[#187E99] text-sm pl-[25px] pb-1 border-b">
            <p
              className="cursor-pointer px-2"
              onClick={() => setSaveforLater(true)}
              style={saveforLater ? { borderBottom: "2px solid #E47911" } : {}}
            >
              No items saved for later
            </p>
            <p
              className="cursor-pointer px-2"
              onClick={() => setSaveforLater(false)}
              style={!saveforLater ? { borderBottom: "2px solid #E47911" } : {}}
            >
              Buy it again
            </p>
          </div>
          {saveforLater ? <div></div> : <div>Bye Hii</div>}
        </div>
        </>
      )}
      <div className="text-xs mx-6 my-4">
        <p>
          The price and availability of items at Amazon.in are subject to
          change. The shopping cart is a temporary place to store a list of your
          items and reflects each item's most recent price.
        </p>
        <p>
          Do you have a promotional code? We'll ask you to enter your claim code
          when it's time to pay.
        </p>
      </div>
      {userLogin ? <></> : <LoginPage />}

      <Footer />
    </div>
  );
};

export default Carts;
