import React from "react";
import FrontPage from "./Components/FrontPage/FrontPage";
import ServiceProduct from "./Components/ServiceProduct/ServiceProduct";
import SeasonBestSellers from "./Components/SeasonBestSellers/SeasonBestSellers";
import Furniture from "./Components/Furniture/Furniture";
import Footer from "./Components/Footer/Footer";
import SigninPage from "./Components/SigninPage/SigninPage";
import TodayDeals from "./Components/TodayDeals/TodayDeals";

// import Header from "./Components/Headers/Header";
// import Header2 from "./Components/Headers/Header2";
// import NavbarSide from "./Components/NavbarSide/NavbarSide";

const FirstPage = ({userLogin, setuserLogin}) => {
  return (
    <div>
      {/* <Header />
      <NavbarSide setAllHeader={setAllHeader} allHeader={allHeader} />
      <div className="absolute top-[60px] w-[98.93vw] ">
        <Header2 setAllHeader={setAllHeader} allHeader={allHeader} /> */}
        <div className="relative ServiceProducts">
          <FrontPage />
          <div className="absolute top-[50%] w-[100vw] py-4 ServiceProducts">
            <ServiceProduct  userLogin={userLogin} setuserLogin={setuserLogin}/>
            <TodayDeals />
            <SeasonBestSellers />
            <Furniture />
            <SigninPage />
            <Footer />
          </div>
        </div>
      </div>
    // </div>
  );
};

export default FirstPage;
