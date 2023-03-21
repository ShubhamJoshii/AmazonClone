import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { ImLock } from "react-icons/im";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./SeasonBestSellers.css";
import Footer from "../Footer/Footer";

// import ReactImageMagnify from "react-image-magnify";
import { useLocation } from "react-router-dom";

const ProductOpen = () => {
  const location = useLocation();
  const Data = location.state.Data;
  const Sell_Price = Math.floor(
    Data.Manf_Price - (Data.Manf_Price * Data.Discount) / 100
  ).toLocaleString();
  const [productShow, setProductShow] = useState(Data.Images[0]);
  let rating = Data.RatingStar;
  let ratingFloor = Math.floor(rating);
  const callFun = () => {
    let star = [];
    for (let i = 0; i < ratingFloor; i++) {
      star[i] = <FaStar className="text-[#E48F44]" />;
    }
    if (rating - ratingFloor === 0.5) {
      star[ratingFloor] = <FaStarHalfAlt className="text-[#E48F44]" />;
      ratingFloor++;
    }
    for (let i = ratingFloor; i < 5; i++) {
      star[i] = <AiOutlineStar className="text-[#E48F44]" />;
    }
    return star;
  };
  return (
    <div className="openProducts w-[100%]">
      <div className="flex mt-10 mx-[20px] gap-7">
        <div className="flex gap-4 w-[48%]">
          <div className="mt-12">
            {Data.Images.map((curr) => {
              return (
                <>
                  <button className="productsImgBtn w-[50px] aspect-square border-[1px] border-black p-[1px] mb-2">
                    <img
                      src={curr}
                      alt="ProductImgs"
                      onMouseEnter={(e) => {
                        setProductShow(e.target.src);
                        
                      }}
                    />
                  </button>
                  <br />
                </>
              );
            })}
          </div>
          {/* <ReactImageMagnify
            {...{
              smallImage: {
                alt: "ProductImg",
                isFluidWidth: true,
                src: productShow,
                // heigth:500
              },
              largeImage: {
                src: productShow,
                width: 600,
                height: 600,
              },
            }}
            /> */}
          <img
            src={productShow}
            alt="Imgs"
            className=" max-h-[550px] aspect-square "
          />
        </div>
        <div className="w-[30%]">
          <div className="border-b mb-4 pb-1">
            <h1 className="text-[20px] font-semibold font-sans ">
              {Data.ProductName}
            </h1>
            <p className="text-[#007185] font-medium cursor-pointer hover:underline  hover:text-[#c07f36]">
              {Data.Brand}
            </p>
            <div className="flex items-center mt-1 gap-1">
              <div className="flex text-lg ">
                {callFun()}
                <FiChevronDown />
              </div>
              <p>16 ratings</p>
            </div>
          </div>
          <div className="flex text-3xl gap-2 ">
            <h2 className="text-[#CE2648]">-{Data.Discount}%</h2>
            <h2 className=" font-medium ">
              <sup className="text-sm">₹</sup>
              {Sell_Price}
            </h2>
          </div>
          <p className="text-xs my-2 text-[grey]  ">
            M.R.P.: <s>₹{Data.Manf_Price.toLocaleString()}</s>
          </p>
          <div className="text-[14px] border-b mb-4 pb-1">
            <p>Inclusive of all taxes</p>
            <p>
              <b>EMI</b> starts at ₹655. No Cost EMI available{" "}
              <span className="text-[#007185] ">EMI options</span>{" "}
            </p>
          </div>
          <div>
            <h1 className="text-lg font-semibold ">Offers</h1>
            <div className="flex  ">
              <div className="border p-2 rounded-lg w-[160px] mr-1">
                <h1 className="font-semibold">No Cost EMI</h1>
                <p className="text-[13.5px] font-[arial]">
                  Upto ₹579.59 EMI interest savings on Amazon Pay ICICI…
                </p>
                <div className="flex items-center text-[#007185] text-sm hover:text-[#CE2648] hover:underline cursor-pointer font-medium">
                  <p>1 offer</p>
                  <HiOutlineChevronRight className="text-xs" />
                </div>
              </div>
              <div className="border p-2 rounded-lg w-[160px] mr-1">
                <h1 className="font-semibold">Bank Offer</h1>
                <p className="text-[13.5px] font-[arial]">
                  Upto ₹500.00 discount on select Credit Cards, City…
                </p>
                <div className="flex items-center text-[#007185] text-sm hover:text-[#CE2648] hover:underline cursor-pointer font-medium">
                  <p>4 offer</p>
                  <HiOutlineChevronRight className="text-xs" />
                </div>
              </div>
              <div className="border p-2 rounded-lg w-[160px] mr-1">
                <h1 className="font-semibold">Partner Offers</h1>
                <p className="text-[13.5px] font-[arial]">
                  Get GST invoice and save up to 28% on business purchases.
                </p>
                <div className="flex items-center text-[#007185] text-sm hover:text-[#CE2648] hover:underline cursor-pointer font-medium">
                  <p>1 offer</p>
                  <HiOutlineChevronRight className="text-xs" />
                </div>
              </div>
            </div>
          </div>
          <div className="my-2">
            <h1 className="font-bold text-lg ">About this item</h1>
            <ul className="list-disc ml-6 text-sm pb-8">
              {Data.About_Product.map((curr) => {
                return <li>{curr}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="h-[100%]">
          <div className="w-[20%]openProducts border-[1.6px] border-[#0000001d] rounded p-4 ">
            <h1 className="text-2xl font-bold ">
              <sup className="text-sm">₹</sup>
              {Sell_Price}
              <sup className="text-sm">00</sup>
            </h1>
            <p className="text-sm ">
              FREE delivery <b>Monday, 20 March.</b>
              <span className="text-[#007185] cursor-pointer hover:text-[#c07f36] hover:underline">
                Details
              </span>
            </p>
            <div className="flex items-center gap-2 my-3">
              <GrLocation />
              <p>Select delivery location</p>
            </div>
            <p>In stock</p>
            <p className="text-[14px] font-medium mb-2 ">
              Sold and fulfilled by{" "}
              <span className="text-[#007185] hover:text-[#CE2648] hover:underline cursor-pointer">
                UNIVERSAL CYCLES
              </span>
              .
            </p>
            <p className="mb-[10px]">Quantity:</p>
            <button className="bg-[#FFD814] text-sm font-medium w-[100%] py-2 rounded-[20px] mb-2 hover:bg-[#f4ce14]">
              Add to Cart
            </button>
            <button className="bg-[#FFA41C] text-sm font-medium w-[100%] py-2 rounded-[20px] mb-2 hover:bg-[#ff9b06]">
              Buy Now
            </button>
            <div className="flex items-center gap-3">
              <ImLock className="text-[grey]" />
              <p className="text-[#007185] hover:text-[#CE2648] cursor-pointer">
                Secure transaction
              </p>
            </div>
            <button className="my-2 py-1 px-3 border-black border w-[100%] text-xs rounded-md text-left   ">
              Add to Wish List
            </button>
          </div>
          <div className="border-[1.6px] border-[#0000001d] rounded p-4 flex justify-between items-center my-3 cursor-pointer">
            <div>
              <p>New (2) from</p>
              <h1 className="font-[arial]  ">
                <sup className="text-sm">₹</sup>
                <span className="font-bold">{Sell_Price}</span>
                <sup className="text-sm">00 </sup>&
                <span className="font-bold"> FREE Delivery</span>
              </h1>
            </div>
            <HiOutlineChevronRight className="text-xl  " />
          </div>
          <div className="text-center text-xs ">
            <p>Have one to sell?</p>
            <button className="text-base border px-4 py-[1px] rounded-md my-1 hover:bg-[#00000006]">
              Sell on Amazon
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductOpen;
