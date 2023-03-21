import React from "react";
import "./ServiceProduct.css";
import { useNavigate } from "react-router-dom"; 


import ProfessionalTools from "../../AmazonAssets/ProfessionalTools.jpg";
import MeasuringInstrument from "../../AmazonAssets/MeasuringInstrument.jpg";
import CleaningSupplies from "../../AmazonAssets/CleaningSupplies.jpg";
import MedicalSupplies from "../../AmazonAssets/MedicalSupplies.jpg";
import Bags from "../../AmazonAssets/Bags.jpg";
import Clothing from "../../AmazonAssets/Clothing.jpg";
import Footware from "../../AmazonAssets/Footware.jpg";
import Watches from "../../AmazonAssets/Watches.jpg";
import Vaccum from "../../AmazonAssets/Vaccum.jpg";
import TyreRims from "../../AmazonAssets/TyreRims.jpg";
import ClearanceStore from "../../AmazonAssets/Clearance_store.jpg";
import phermacy from "../../AmazonAssets/phermacy.jpg";
import CleaningAcc from "../../AmazonAssets/CleaningAcc.jpg";
import Helmet from "../../AmazonAssets/Helmet.jpg";
import Starting87 from "../../AmazonAssets/Starting87.jpg";
import Starting149 from "../../AmazonAssets/Starting149.jpg";
import Starting189 from "../../AmazonAssets/Starting189.jpg";
import Starting239 from "../../AmazonAssets/Starting239.jpg";
import Claim from "../../AmazonAssets/Claim.jpg";
import Redeem from "../../AmazonAssets/Redeem.jpg";
import PayWin from "../../AmazonAssets/PayWin.jpg";
import ShopCollect from "../../AmazonAssets/ShopCollect.jpg";
import Sponsored from "../../AmazonAssets/Sponsored.jpg";

const serviceData = [
  {
    title: "Up to 60% off | Professional tools, testing & more",
    ServiceProduct: [
      { Img: ProfessionalTools, ImgTopic: "Professional Tools" },
      { Img: MeasuringInstrument, ImgTopic: "Measuring Instruments" },
      { Img: CleaningSupplies, ImgTopic: "Cleaning Supplies" },
      { Img: MedicalSupplies, ImgTopic: "Medical Supplies" },
    ],
    displays: "grid grid-cols-2 gap-3",
    further: "See more",
  },
  {
    title: "Up to 60% off | Styles for men",
    ServiceProduct: [
      { Img: Clothing, ImgTopic: "Clothing" },
      { Img: Footware, ImgTopic: "Footwear" },
      { Img: Watches, ImgTopic: "Watches" },
      { Img: Bags, ImgTopic: "Bags & luggage" },
    ],
    displays: "grid grid-cols-2 gap-3",
    further: "See more",
  },
  {
    title: "Up to 70% off | Clearance store",
    ServiceProduct: [{ Img: ClearanceStore, ImgTopic: "" }],
    displays: "",
    further: "See more",
  },
  {
    title: "Automotive essentials | Up to 60% off",
    ServiceProduct: [
      { Img: CleaningAcc, ImgTopic: "Cleaning accessories" },
      { Img: TyreRims, ImgTopic: "Tyre & rim care" },
      { Img: Helmet, ImgTopic: "Helmets" },
      { Img: Vaccum, ImgTopic: "Vacuum Cleaner" },
    ],
    displays: "grid grid-cols-2 gap-3",
    further: "See more",
  },
  {
    title: "Starting ₹87 | Amazon Brands & more",
    ServiceProduct: [
      { Img: Starting149, ImgTopic: "Starting ₹149 | Choppers & more" },
      { Img: Starting87, ImgTopic: "Starting ₹87 | String lights & more" },
      {
        Img: Starting239,
        ImgTopic: "Starting ₹239 | Kitchen storage & containers",
      },
      { Img: Starting189, ImgTopic: "Starting ₹189 | Wall stickers & more" },
    ],
    displays: "grid grid-cols-2 gap-3",
    further: "Shop more",
  },
  {
    title: "Shop & Pay | Earn rewards daily",
    ServiceProduct: [
      { Img: Claim, ImgTopic: "Claim your scratch cards" },
      { Img: Redeem, ImgTopic: "Redeem your collected rewards" },
      { Img: PayWin, ImgTopic: "Pay & Win scratch cards" },
      { Img: ShopCollect, ImgTopic: "Shop & Collect Rewards daily" },
    ],
    displays: "grid grid-cols-2 gap-3",
    further: "See more",
  },
  {
    title: "Up to 50% off | Monitor blood sugar at home",
    ServiceProduct: [{ Img: phermacy, ImgTopic: "" }],
    displays: "",
    further: "Visit the store",
  },
];
const ServiceProduct = ({userLogin, setuserLogin}) => {
  const navigate = useNavigate();
  return (
    <div className="ServiceProducts">
      <div className="flex gap-y-[20px] mx-auto mb-6 flex-wrap justify-evenly ">
        {serviceData.map((curr) => {
          return (
            <div className="bg-white relative pt-[15px] pb-[30px] px-[10px] w-[23%] max-w-[400px]">
              <h1 className="text-xl font-bold pb-4 mx-2">
                {curr.title}
              </h1>
              <div className={curr.displays}>
                {curr.ServiceProduct.map((curr2) => {
                  return (
                    <div className=" cursor-pointer">
                      <img src={curr2.Img} alt="" className="w-[100%]" />
                      <p className="text-xs font-medium pt-1">
                        {curr2.ImgTopic}
                      </p>
                    </div>
                  );
                })}
              </div>
              <p className="text-blue-600 text-sm cursor-pointer font-medium absolute bottom-1 hover:text-[brown] hover:underline">
                {curr.further}
              </p>
            </div>
          );
        })}
        <div className="w-[23%]">
          <div className="py-[15px] px-[20px] bg-white w-[100%]" style={userLogin === true ? {display:"none"}:{display:"block"}}>
            <h1 className="font-bold pb-4 text-2xl w-[90%]">
              Sign in for your best experience
            </h1>
            <button className="w-[95%] mx-[2.5%] py-2 px-1 text-sm bg-[#FFD814] border-none rounded-xl " onClick={() => navigate("/signin")}>
              Sign in securrly
            </button>
          </div>
          <img src={Sponsored} alt="SponsoredImgs" className="mt-4 w-[270px] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ServiceProduct;
