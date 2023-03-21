import React, { useEffect, useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { BiArrowBack } from "react-icons/bi";
import "./NavbarSide.css";

const NavbarTemplate = (props) => {
  const [openSub, setopenSub] = useState();
  const furthurNavFun = (e) => {
    const b = e.target.id + 1;
    setopenSub(b);
    const a = document.getElementById(b).style;
    // a.display === "none" ? (a.display = "block") : (a.display = "none");
    a.left === "350px" ? (a.left = "0px") : (a.left = "350px");
    // console.log(props.ShortName);
    // console.log();
    console.log(e.target.id);
  };

  const backToMain = (e) => {
    const a = document.getElementById(e).style;
    // a.display === "none" ? (a.display = "block") : (a.display = "none");
    a.left === "0px" ? (a.left = "350px") : (a.left = "0px");
  };
  return (
    <div className="border-b pb-4">
      <p className="text-xl font-bold ml-8 mb-2 mt-3">{props.Topic}</p>
      {props.Tdata.map((curr, ids) => {
        let a = props.ShortName + ids;
        return (
          <div
            className="navbarHover py-2 pl-12 flex justify-between items-center pr-6 cursor-pointer hover:bg-[#00000021]"
            key={ids}
            id={a}
            onClick={furthurNavFun}
          >
            <a
              href={curr.link}
              target="_blank"
              style={
                curr.moreDetailes === true
                  ? { pointerEvents: "none" }
                  : { pointerEvents: "" }
              }
              rel="noreferrer"
            >
              {curr.name}
            </a>
            {curr.moreDetailes === true ? (
              <GrFormNext className="text-[#879596] text-xl hover:text-[#000000]" />
            ) : (
              <></>
            )}
            {curr.moreDetailes === true ? (
              <div
                className="furtherNavbar absolute min-h-[200vh] w-[100%] left-[350px] top-0 bg-[#ffffff] z-50"
                id={a + 1}
                style={{ transition: "0.5s" }}
              >
                <div
                  className="flex border-b py-4 px-4 items-center gap-3 hover:text-black"
                  onClick={() => backToMain(openSub)}
                >
                  <BiArrowBack className="text-2xl text-[#00000060]" />
                  <h1 className="font-bold text-lg">MAIN MENU</h1>
                </div>
                {curr.further.map((curr2) => {
                  return (
                    <div className="border-b">
                      <h1 className="font-bold text-xl pl-5 mt-3 mb-2">
                        {curr2.Headname}
                      </h1>
                      {curr2.partsName.map((curr3, id) => {
                        return (
                          <div className="navbarHover pl-10 py-[5px] flex justify-between items-center cursor-pointer hover:bg-[#00000033] ">
                            <a
                              href={curr3.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {curr3.subTopic}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavbarTemplate;
