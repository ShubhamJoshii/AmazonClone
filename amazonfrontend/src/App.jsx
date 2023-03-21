import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/LoginPage/SignIn";
import FirstPage from "./FirstPage";
import NotFoundPage from "./Components/NotFoundPage";
import ProductOpen from "./Components/SeasonBestSellers/ProductOpen";
import Register from "./Components/Register/Register"; 
import Carts from "./Components/Carts/carts";

import Header from "./Components/Headers/Header";
import Header2 from "./Components/Headers/Header2";
import NavbarSide from "./Components/NavbarSide/NavbarSide";
const App = () => {
  const [allHeader, setAllHeader] = useState(false);
  const [userLogin, setuserLogin] = useState(false);
  return (
    <Router>
      <div className="font-[arial]">
        <Header userLogin={userLogin} setuserLogin={setuserLogin}/>
        <NavbarSide setAllHeader={setAllHeader} allHeader={allHeader} />
        <div className="absolute top-[60px] w-[100%] ">
          <Header2 setAllHeader={setAllHeader} allHeader={allHeader} />
          <Routes>
            <Route path="/" element={<FirstPage  userLogin={userLogin} setuserLogin={setuserLogin}/>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/carts" element={<Carts userLogin={userLogin} setuserLogin={setuserLogin}/>} />
            <Route path="/products" element={<ProductOpen />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/register" element={<Register />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
