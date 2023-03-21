import React from "react";
import "./SeasonBestSellers";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import BestSeller1 from "../../AmazonAssets/BestSeller1.jpg";
import BestSeller1_1 from "../../AmazonAssets/BestSeller1.1.jpg";
import BestSeller1_2 from "../../AmazonAssets/BestSeller1.2.jpg";
import BestSeller1_3 from "../../AmazonAssets/BestSeller1.3.jpg";
import BestSeller1_4 from "../../AmazonAssets/BestSeller1.4.jpg";
import BestSeller1_5 from "../../AmazonAssets/BestSeller1.5.jpg";
import BestSeller1_6 from "../../AmazonAssets/BestSeller1.6.jpg";

import BestSeller2 from "../../AmazonAssets/BestSeller2.jpg";
import BestSeller2_1 from "../../AmazonAssets/BestSeller2.1.jpg";
import BestSeller2_2 from "../../AmazonAssets/BestSeller2.2.jpg";
import BestSeller2_3 from "../../AmazonAssets/BestSeller2.3.jpg";
import BestSeller2_4 from "../../AmazonAssets/BestSeller2.4.jpg";
import BestSeller2_5 from "../../AmazonAssets/BestSeller2.5.jpg";

import BestSeller3 from "../../AmazonAssets/BestSeller3.jpg";
import BestSeller3_1 from "../../AmazonAssets/BestSeller3.1.jpg";
import BestSeller3_2 from "../../AmazonAssets/BestSeller3.2.jpg";
import BestSeller3_3 from "../../AmazonAssets/BestSeller3.3.jpg";
import BestSeller3_4 from "../../AmazonAssets/BestSeller3.4.jpg";
import BestSeller3_5 from "../../AmazonAssets/BestSeller3.5.jpg";

import BestSeller4 from "../../AmazonAssets/BestSeller4.jpg";
import BestSeller4_1 from "../../AmazonAssets/BestSeller4.1.jpg";
import BestSeller4_2 from "../../AmazonAssets/BestSeller4.2.jpg";

import BestSeller5 from "../../AmazonAssets/BestSeller5.jpg";
import BestSeller5_1 from "../../AmazonAssets/BestSeller5.1.jpg";
import BestSeller5_2 from "../../AmazonAssets/BestSeller5.2.jpg";
import BestSeller5_3 from "../../AmazonAssets/BestSeller5.3.jpg";

import BestSeller6 from "../../AmazonAssets/BestSeller6.jpg";
import BestSeller6_1 from "../../AmazonAssets/BestSeller6.1.jpg";
import BestSeller6_2 from "../../AmazonAssets/BestSeller6.2.jpg";
import BestSeller6_3 from "../../AmazonAssets/BestSeller6.3.jpg";
import BestSeller6_4 from "../../AmazonAssets/BestSeller6.4.jpg";
import BestSeller6_5 from "../../AmazonAssets/BestSeller6.5.jpg";

import BestSeller7 from "../../AmazonAssets/BestSeller7.jpg";
import BestSeller7_1 from "../../AmazonAssets/BestSeller7.1.jpg";

import BestSeller8 from "../../AmazonAssets/BestSeller8.jpg";
import BestSeller8_1 from "../../AmazonAssets/BestSeller8.1.jpg";
import BestSeller8_2 from "../../AmazonAssets/BestSeller8.2.jpg";
import BestSeller8_3 from "../../AmazonAssets/BestSeller8.3.jpg";
import BestSeller8_4 from "../../AmazonAssets/BestSeller8.4.jpg";

import BestSeller9 from "../../AmazonAssets/BestSeller9.jpg";
import BestSeller9_1 from "../../AmazonAssets/BestSeller9.1.jpg";
import BestSeller9_2 from "../../AmazonAssets/BestSeller9.2.jpg";
import BestSeller9_3 from "../../AmazonAssets/BestSeller9.3.jpg";

import BestSeller10 from "../../AmazonAssets/BestSeller10.jpg";
import BestSeller10_1 from "../../AmazonAssets/BestSeller10.1.jpg";
import BestSeller10_2 from "../../AmazonAssets/BestSeller10.2.jpg";
import BestSeller10_3 from "../../AmazonAssets/BestSeller10.3.jpg";
import BestSeller10_4 from "../../AmazonAssets/BestSeller10.4.jpg";
import BestSeller10_5 from "../../AmazonAssets/BestSeller10.5.jpg";

import BestSeller11 from "../../AmazonAssets/BestSeller11.jpg";
import BestSeller11_1 from "../../AmazonAssets/BestSeller11.1.jpg";
import BestSeller11_2 from "../../AmazonAssets/BestSeller11.2.jpg";
import BestSeller11_3 from "../../AmazonAssets/BestSeller11.3.jpg";

import BestSeller12 from "../../AmazonAssets/BestSeller12.jpg";
import BestSeller12_1 from "../../AmazonAssets/BestSeller12.1.jpg";
import BestSeller12_2 from "../../AmazonAssets/BestSeller12.2.jpg";
import BestSeller12_3 from "../../AmazonAssets/BestSeller12.3.jpg";
import BestSeller12_4 from "../../AmazonAssets/BestSeller12.4.jpg";

import { useNavigate } from "react-router-dom";

const SeasonBestData = [
  {
    ProductName:
      "Firefox Bikes Bad Attitude 6-27.5T, 21 Speed MTB Mountain Cycle (Black/Silver) I First Free Service Available (Frame: 18 Inches, Unisex Adult)",
    Brand: "Visit the Firefox Bikes Store",
    Manf_Price: 20000,
    Discount: 32,
    RatingStar: 4.5,
    About_Product: [
      "The Firefox Bad Attitude 6 is built on a MTB specific Steel frame which is Sturdy and durable. The frame offers good stability",
      "In-box Content : 1 Firefox Bikes Bad Attitude 6, Pedal, Tool Kit (Allen Key & Spanner)",
      "Steel rigid MTB frame with Rigid Fork |The bike is equipped with Disc -Brake for Power Braking, Alloy rims for extra strength | Tire Size :27.5 inches| Frame Size : 18 inches | Ideal For :13+ Years| Min Rider Height : 5.5 feet | Max Rider Height : 5.10 feet | Front Brake : D-Brake| Rear Brake : D-Brake | Frame Material : Steel|Side Stand: Yes I Reflector: YES I Suspension :No I Refer Installation video in Images as User Manual",
      "The cycle is delivered in Semi-Assembled condition (85% assembled). Refer to installation video in images to assemble to bike yourself or Add Cycle assembly for home installation while checkout. In case you need any further assistance in assembling the bike please visit nearest Firefox Dealer with in-voice. To know your nearest Firefox Dealer visit Firefox website",
      "First Free Service: Visit Firefox website to book your first free service online. The first free service includes bike tune up, Chain de grease & lubrication, Brake wire degrease and lubrication ,Air pressure checkup",
    ],
    Images: [
      BestSeller1,
      BestSeller1_1,
      BestSeller1_2,
      BestSeller1_3,
      BestSeller1_4,
      BestSeller1_5,
      BestSeller1_6,
    ],
  },
  {
    ProductName:
      "F N Finautica Wooden Italian Wooden Crafter Standard Size Tripod Floor Lamp With Jute Shade, Bulb And Holder, Pack Of 1",
    Brand: "Brand: F N",
    Manf_Price: 4000,
    Discount: 65,
    RatingStar: 3,
    About_Product: [
      "Made with high-quality material",
      "Shade, Size :- 11 x 12 Inch",
      "Easy Installation",
      "Made In India",
    ],
    Images: [
      BestSeller2,
      BestSeller2_1,
      BestSeller2_2,
      BestSeller2_3,
      BestSeller2_4,
      BestSeller2_5,
    ],
  },
  {
    ProductName:
      'Lifelong Conqueror Freeride Shimano Gear Cycle,26T Steel MTB Unisex Cycle with 21 Speed|Dual Disc Brake|Frame Size: 18 "|85% Assembled|Pan India (6 Months Warranty,Ideal for Unisex Adults)',
    Brand: "Visit the Lifelong Store",
    Manf_Price: 18499,
    Discount: 43,
    RatingStar: 4.7,
    About_Product: [
      "This Shimano 21 speed geared cycle comes with Disc Brakes and suspension for effortless Braking system built for your ease of use and maintenance, and excellent braking power. Specially designed to provide proper braking control on all terrains.",
      "Warranty: This product comes with a 6 months warranty| Comes with suspension & disc brakes on the front and rear",
      "The cycle has a sturdy and reliable steel frame that can brave rough riding conditions and terrains. The top-notch construction quality ensures that the bike has a long lifespan",
      "Easily adjustable saddle height and an attractive grip offer superior comfort and well cushioned ride. The seat height can be adjusted without using any tools.",
      "Safety: The Lifelong Shimano Gear cycles are ergonomically designed that are safe to ride and are comfortable for long rides as well",
    ],
    Images: [
      BestSeller3,
      BestSeller3_1,
      BestSeller3_2,
      BestSeller3_3,
      BestSeller3_4,
      BestSeller3_5,
    ],
  },
  {
    ProductName:
      "Steam Deck 256 GB Console Bundled With X-Ninja Stream Deck Case with Steam Deck Screen Protector (Combo) Freebie",
    Brand: "Brand: STEAM DECK",
    Manf_Price: 59050,
    Discount: 0,
    RatingStar: 5,
    About_Product: [
      "Partnered with AMD to create Steam Deck’s custom APU, optimized for handheld gaming. It is a Zen 2 + RDNA 2 powerhouse, delivering more than enough performance to run the latest AAA games in a very efficient power envelope.",
      "Once you’ve logged into Steam Deck, your entire Steam Library shows up, just like any other PC. You’ll also see the compatibility RatingStar of each game, indicating the kind of experience you can expect when playing. You can dynamically filter any view in your library by compatibility RatingStar if you’re looking for specific sorts of experiences.",
      "The Steam Deck was built for extended play sessions—whether you’re using thumbsticks or trackpads—with full-size controls positioned perfectly within your reach. The rear of the device is sculpted to comfortably fit a wide range of hand sizes.",
      "Warranty not applicable for this product",
    ],
    Images: [BestSeller4, BestSeller4_1, BestSeller4_2],
  },
  {
    ProductName:
      "jhf Wooden Traditional Triangle Sitting Stool/Chair Handmade Handicraft for Home Decor Gift Item",
    Brand: "Brand: Generic",
    Manf_Price: "Currently unavailable.",
    Discount: "",
    RatingStar: 2,
    About_Product: [
      "Product Contains :- Wooden Triangle Leg stool / table",
      "Product Dimension in CM (L*B*H) :- 37 X 37 X 41 cm, Material :- Wooden",
      "This Royal Indian Handicraft can be perfect gift for any festival occasion Like Diwali and can also be used to decorate the house like Dining Room , Hotel , Restaurant , Office Corporate Gift, Marriage Anniversary , Wedding Gift",
    ],
    Images: [BestSeller5, BestSeller5_1, BestSeller5_2, BestSeller5_3],
  },
  {
    ProductName:
      "SUNISA Blush Brush for Makeup, Foundation Blusher Brush for Blending Liquid, Compact Powder Brush, Cream or Flawless Powder Cosmetics (Black)",
    Brand: "Brand: SUNISA",
    Manf_Price: 599,
    Discount: 65,
    RatingStar: 4.0,
    About_Product: [
      "The bristles of this foundation brush are very soft to touch and apply foundation on your face, won't absorb foundation into the brush, smooth and nude makeup effect like ironing clothes.",
      "Good flawless makeup for powder, liquid, concealer, cream, blush, concealer, foundation cosmetics. Your great partner for compact powder brush makeup.",
      "The flawless foundation brush is made of unique iron-type design which is easier to deal with dead corners such as the nose shadow, under the eyes and so on. Also, the new shape design for the foundation handle, it has nice touch feeling and makes makeup gracefully.",
      "Our SUNISA flawless foundation brush with 30*60mm large contact area have strong powder grip. Unique iron-type sharp angle design, uniform bristles without dead angle. Only 10 seconds finish a perfect, flawless makeup look.",
    ],
    Images: [
      BestSeller6,
      BestSeller6_1,
      BestSeller6_2,
      BestSeller6_3,
      BestSeller6_4,
      BestSeller6_5,
    ],
  },
  {
    ProductName:
      "D-Link Cat 6 Networking Cable for Router UTP Outdoor 100 meters (White)",
    Brand: "Brand: D-Link",
    Manf_Price: 4900,
    Discount: 33,
    RatingStar: 5.0,
    About_Product: [
      "100% Copper and no mix of other material",
      "The speed of a wired LAN is largely determined by how fast data is transmitted between computers and network components.",
      "The solid construction of the Technotech Cat6 cable helps you stream video, music, transmit data at higher speeds by providing a fast and reliable connection.",
      "Note: A network's speed is determined by many factors in addition to the cables, including your router, switch boxes and component.",
    ],
    Images: [BestSeller7, BestSeller7_1],
  },
  {
    ProductName: "Ezy Roller",
    Brand: "Brand: EzyRoller",
    Manf_Price: 47515,
    Discount: 16,
    RatingStar: 3.0,
    About_Product: ["Ezy Roller", "Ride On"],
    Images: [
      BestSeller8,
      BestSeller8_1,
      BestSeller8_2,
      BestSeller8_3,
      BestSeller8_4,
    ],
  },
  {
    ProductName: "MKS-002 Battery Ride On Toy (Red)",
    Brand: "Brand: Generic",
    Manf_Price: 28300,
    Discount: 33,
    RatingStar: 4.5,
    About_Product: [
      "Made In India",
      "Easy availability of spare parts",
      "Superior quality over similar chinese toys",
      "Easy to assemble with detailed tutorial youtube video",
    ],
    Images: [BestSeller9, BestSeller9_1, BestSeller9_2, BestSeller9_3],
  },
  {
    ProductName:
      "Hollyland Lark M1 Wireless Microphone for Smartphones DSLR Cameras Laptops Lapel Mic with Noise Cancellation 656ft Transmission 20H Battery Life for Youtube Video Record Facebook Live Stream(2TX+1RX)",
    Brand: "Brand: HollyView",
    Manf_Price: 27730,
    Discount: 46,
    RatingStar: 4.2,
    About_Product: [
      "🎙Wide Compatibility--Lark M1 wireless lavalier mic works with all kinds of devices. Included a 3.5mm-TRS-to-TRS cable for cameras, and a 3.5mm-TRS-to-TRRS cable for computers/phones with 3.5mm port. For the NOT included 3.5mm-TRS-to-lightning cable for iPhone/iPad or 3.5mm-TRS-to-Type-C cable for Android phones, please purchase from the official suppliers.",
      "🎙Lightweight & Portable--Hollyland Lark M1 lavalier microphone weighs only 0.42oz with the size of a USB flash drive and fits all kinds of collars. The charging case takes 1.5h to charge the whole set and can charge them 2 times. TX and RX can work for 8 hours when fully charged. Each unit has a USB-C port for direct charging while working at the same time.",
      "🎙Powerful Self-Adaptability--Lark M1 wireless microphone has a powerful intelligent audio processing algorithm that simplifies its operation and achieves professional results. Ready to use out of the box. M1 microphone system can identify and adjust to mobile/camera volume settings automatically, while still allowing manual pairing and working mode switching.",
      "🎙656ft LOS Transmission Range--Lark M1 lapel microphone supports up to 656ft stable and reliable working distance in open space, and 130ft when you turn around or with obstacles between the TX and RX. Ideal for video production applications like interview, vlogging, live streaming, wedding shooting, online tutoring, YouTube, recording, podcast, studio, etc.",
      "🎙HiFi Audio Quality & Noise Cancellation--Hollyland Lark M1 microphone, adopting LC3 Codec technology, has an enhanced 48kHz/16bit sampling rate. Lark M1 omnidirectional mic is able to record incredibly rich ambiance details. With a cutting-edge DSP algorithm, the lark m1 wireless microphone takes only one click to filter out the ambient noise, suitable for any recording environment.",
    ],
    Images: [
      BestSeller10,
      BestSeller10_1,
      BestSeller10_2,
      BestSeller10_3,
      BestSeller10_4,
      BestSeller10_5,
    ],
  },
  {
    ProductName:
      "XLNT - 10000 WATTS - Petrol Portable Generator with Electric Start",
    Brand: "Brand: XLNT",
    Manf_Price: 42000,
    Discount: 15,
    RatingStar: 3.5,
    About_Product: ["3 Phase", "1 Phase", "Portable Generators"],
    Images: [BestSeller11, BestSeller11_1, BestSeller11_2, BestSeller11_3],
  },
  {
    ProductName:
      "URBANMAC Eyeshadow Palette 60 Color Makeup Palette Highlighters Eye Make Up High Pigmented Professional Mattes and Shimmers",
    Brand: "Visit the URBANMAC Store",
    Manf_Price: 999,
    Discount: 62,
    RatingStar: 3.7,
    About_Product: ["Age Range Description: Adult"],
    Images: [
      BestSeller12,
      BestSeller12_1,
      BestSeller12_2,
      BestSeller12_3,
      BestSeller12_4,
    ],
  },
];

const SeasonBestSellers = () => {
  const Navigate = useNavigate();
  const slideLeft = () => {
    window.scrollTo(1000, 1000);
    document.getElementsByClassName("scrollSellers").style.left = "100px";
    console.log("Hello ");
  };
  const slideRight = () => {
    console.log("Hello");
  };
  return (
    <div className="bg-white mx-5 p-4 h-[305px]">
    <div className="flex items-center p-4">
    <h1 className="text-xl font-bold">
      Season's best sellers from small businesses
      </h1>
      <div className="px-4 font-semibold text-sm text-[#037386] cursor-pointer hover:underline hover:text-[brown]">
        See all offers
      </div>
    </div>
      <div className="scrollSellers overflow-hidden flex hover:overflow-x-scroll gap-1">
        {SeasonBestData.map((curr, id) => {
          return (
            <div
              className="h-[200px] aspect-square mb-4"
              onClick={() => Navigate("/products", { state: { Data: curr } })}
              key={id}
            >
              <img
                src={curr.Images[0]}
                alt="ProductImage"
                className="h-[200px] m-auto cursor-pointer"
              />
            </div>
          );
        })}
        <div className="absolute flex items-center h-[200px]">
          <AiOutlineLeft
            className="bg-white absolute left-[5px] w-[40px] h-[90px] shadow-lg cursor-pointer"
            onClick={slideLeft}
          />
        </div>
        <div className="absolute right-[40px] flex items-center h-[200px]">
          <AiOutlineRight
            className="bg-white w-[40px] h-[90px] shadow-lg cursor-pointer"
            onClick={slideRight}
          />
        </div>
      </div>
    </div>
  );
};

export default SeasonBestSellers;
