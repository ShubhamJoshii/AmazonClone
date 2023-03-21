const express = require("express");
const router = express.Router();
const User = require("./Database");
const bcrypt = require("bcrypt");
const Authenication = require("./Authenication");
const jwt = require("jsonwebtoken");

// router.get("/", (req, res) => {
//   res.send("Hello World");
// });

router.post("/register", async (req, res) => {
  const { Name, CountryCode, MobileNum, Password } = req.body;
  if (!Name || !CountryCode || !MobileNum || !Password) {
    return res.json({ message: "Fill Form Properly" });
  }
  try {
    const userExist = await User.findOne({ MobileNum });
    if (userExist) {
      res.json({ message: "User Already Exists" });
    } else {
      const userData = new User({ Name, CountryCode, MobileNum, Password });
      const data = await userData.save();
      res.json({ message: "User Registered" });
    }
  } catch (err) {
    res.json({ message: "User Exists" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { MobileNum, Password,keepMeSignin } = req.body;
    const userExist = await User.findOne({ MobileNum });
    // console.log(userExist.MobileNum);
    // console.log(keepMeSignin);
    const passwordCheck = await bcrypt.compare(Password, userExist.Password);

    if(keepMeSignin){
      const token = await userExist.generateAuthToken();
      // console.log(token);
  
      //Cookies Sending
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
    }

    if (passwordCheck) {
      res.json({ message: "User Logined" });
    } else {
      res.json({ message: "User Password not matched" });
    }
  } catch (err) {
    res.json({ message: "User Not Exists" });
  }
});

router.post("/home", Authenication, (req, res) => {
  // console.log(req.rootUser);
  res.send(req.rootUser);
});


router.post("/userExist", async (req, res) => {
  try {
    const { MobileNum } = req.body;
    const userExist = await User.findOne({ MobileNum });
    if(userExist)
      return res.json({ message: "User Exists" });
    
    res.json({ message: "User Not Exists" });
  } catch (err) {
    res.json({ message: "User Not Exists" });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logout");
});

module.exports = router;
