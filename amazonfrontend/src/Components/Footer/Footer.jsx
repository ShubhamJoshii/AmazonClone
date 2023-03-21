import React from "react";
import "./Footer.css";
import AmazonLogo from "../../AmazonAssets/AmazonLogo.png";
import inFlag from "../../AmazonAssets/InFlag.png";
import { TiArrowUnsorted } from "react-icons/ti";
import { TfiWorld } from "react-icons/tfi";

const footerData = [
  {
    Topic: "Get to Know Us",
    SubTopics: [
      {
        SubTopic: "About Us",
        link: "#",
      },
      {
        SubTopic: "Careers",
        link: "#",
      },
      {
        SubTopic: "Press Releases",
        link: "#",
      },
      {
        SubTopic: "Amazon Science",
        link: "#",
      },
    ],
  },
  {
    Topic: "Connect with Us",
    SubTopics: [
      {
        SubTopic: "Facebook",
        link: "https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6",
      },
      {
        SubTopic: "Twitter",
        link: "https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6",
      },
      {
        SubTopic: "Instagram",
        link: "https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards",
      },
    ],
  },
  {
    Topic: "Make Money with Us",
    SubTopics: [
      {
        SubTopic: "Sell on Amazon",
        link: "#",
      },
      {
        SubTopic: "Sell under Amazon Accelerator",
        link: "#",
      },
      {
        SubTopic: "Protect and Build Your Brand",
        link: "#",
      },
      {
        SubTopic: "Amazon Global Selling",
        link: "#",
      },
      {
        SubTopic: "Become an Affiliate",
        link: "#",
      },
      {
        SubTopic: "Fulfilment by Amazon",
        link: "#",
      },
      {
        SubTopic: "Advertise Your Products",
        link: "#",
      },
      {
        SubTopic: "Amazon Pay on Merchants",
        link: "#",
      },
    ],
  },
  {
    Topic: "Let Us Help You",
    SubTopics: [
      {
        SubTopic: "COVID-19 and Amazon",
        link: "#",
      },
      {
        SubTopic: "Your Account",
        link: "#",
      },
      {
        SubTopic: "Returns Centre",
        link: "#",
      },
      {
        SubTopic: "100% Purchase Protection",
        link: "#",
      },
      {
        SubTopic: "Amazon App Download",
        link: "#",
      },
      {
        SubTopic: "Amazon Assistant Download",
        link: "#",
      },
      {
        SubTopic: "Help",
        link: "#",
      },
    ],
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

const webCountry = [
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "Poland",
  "Singapore",
  "Spain",
  "Turkey",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
];

const footerData2 = [
  {
    title: "AbeBooks",
    text: `Books, art \n& collectibles`,
  },
  {
    title: "Amazon Web Service",
    text: "Scalable Clound \nComputing Services",
  },
  {
    title: "Audiable",
    text: "Download \nAudio Books",
  },
  {
    title: "DPReview",
    text: "Digital \nPhotography",
  },
  {
    title: "IMDb",
    text: "Movies, Tv \nCelebrities",
  },
  {
    title: "Shopbop",
    text: "Designer \nFashion Brands",
  },
  {
    title: "Amazon Business",
    text: "Everything For \nYour Business ",
  },
  {
    title: "Prime Now",
    text: "2-Hour Delivery on \nEveryday Items",
  },
  {
    title: "Amazon Prime Music",
    text: "90 millions songs, ad-free \nOver 15 million podcast episodes",
  },
];

const Footer = () => {
  const backToTop = () => {
    window.scrollTo(0, 0);
    // console.log("fdasf");
  };
  return (
    <div className="relative bottom-0">
      <button
        className="bg-[#37475A] w-[100%] text-white m-auto py-4 text-sm hover:bg-[#485463] font-semibold"
        onClick={backToTop}
      >
        Back to top
      </button>
      <div className="bg-[#232F3E] border-b border-[#aea7a75f]">
        <div className=" text-white m-auto w-[1100px] font-light  font-arial grid grid-flow-col py-[40px] pt-[40px] pb-[60px] gap-1">
          {footerData.map((curr) => {
            return (
              <div className=" w-[250px]">
                <h1 className="font-bold ">{curr.Topic}</h1>
                {curr.SubTopics.map((curr2) => {
                  return (
                    <div className="mb-[3px] text-[14.5px]">
                      <a href={curr2.link} className="hover:border-b">
                        {curr2.SubTopic}
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#232F3E] text-white py-[20px]">
        <div className="flex justify-center gap-[50px] items-center py-[20px]">
          <img src={AmazonLogo} alt="AmazonLogo" className="h-[30px] " />
          <div className="langFooter border w-[120px]">
            <div className="hover:border px-2 flex gap-x-2 min-h-[30px] justify-center items-center cursor-pointer text-xs text-[#D7D4D7]">
              {/* <img src={inFlag} alt="IndiaFlag" width="20px" /> */}
              <TfiWorld />
              <p>English</p>
              <TiArrowUnsorted className="text-[#ffffffa9]" />
            </div>
            <div
              id="langFooterHover"
              className="absolute w-[270px] text-black p-4 bg-[#fff] border rounded"
            >
              <div className="arrows bg-[#fff] w-4 h-4 absolute rotate-45  top-[-5px] left-12"></div>
              {languageRegion.map((curr) => {
                return (
                  <div className="flex items-center text-sm pl-2 pb-1 hover:text-[#F08804] hover:underline font-bold ">
                    <input
                      type="radio"
                      name="LangRegionDrop"
                      className="cursor-pointer"
                      id={curr.short}
                    />
                    <label htmlFor={curr.short} className="pl-3 cursor-pointer">
                      {curr.long} - {curr.short}
                    </label>
                  </div>
                );
              })}
              <p className="text-[#0066C0] pb-3 border-b-2 cursor-pointer hover:underline ">
                Learn more
              </p>
              <div className="flex items-center pb-3 pt-2">
                <img src={inFlag} alt="inflag" className="h-7" />
                <p className="text-sm pl-2">You are shopping on Amazon.in</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs flex flex-wrap w-[1100px] gap-y-1 justify-center m-auto space-x-6 ">
          {webCountry.map((curr) => {
            return <p className="hover:border-b cursor-pointer">{curr}</p>;
          })}
        </div>
      </div>
      <div className="bg-[#131A22] text-[#D7D4D7] py-[30px] ">
        <div className="m-auto grid grid-cols-5 gap-y-4  w-[1100px] whitespace-pre-wrap">
          {footerData2.map((curr) => {
            return (
              <div className="w-[140px] m-auto hover:underline cursor-pointer">
                <h2 className=" text-sm">{curr.title}</h2>
                <p className="text-[#ffffff9c] text-xs">{curr.text}</p>
              </div>
            );
          })}
        </div>
        <div className="text-xs text-[#D7D4D7] text-center space-x-8 my-[20px]">
          <a href="/" className="hover:border-b">
            Conditions of Use & Sale
          </a>
          <a href="/" className="hover:border-b">
            Privacy Notice
          </a>
          <a href="/" className="hover:border-b">
            Interest-Based Ads
          </a>
          <p className="hover:underline pt-1">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
          <p className="text-center text-sm ">This website only for educational purpose. Thank you 😊 @shubhamjoshi5760</p>
    </div>
  );
};

export default Footer;
