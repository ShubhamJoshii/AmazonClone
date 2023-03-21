const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const SECRET_KEY = "SHUBHAMJOSHIISGOODBOYQWERTYUIOP"
mongoose
  .connect(
    "mongodb+srv://AmazonClone:97qzlsGugAFNIOuC@amazonclone.b1dhevy.mongodb.net/AmazonClone?retryWrites=true&w=majority",
    {
      // mongoose.connect("mongodb://localhost:27017",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DataBase Connected");
  });

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  CountryCode: {
    type: String,
    require: true,
  },
  MobileNum: {
    type: Number,
    require: true,
  },
  Password: {
    type: String,
    require: true,
  },
  tokens: [{
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  // console.log(this.Password,"Pre")
  if (this.isModified("Password")) {
    this.Password = await bcrypt.hash(this.Password, 12);
    console.log(this);
  }
  next();
});

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},SECRET_KEY);
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token;
    }catch(err){
        console.log(err);
    }
}

const User = new mongoose.model("CustomerData", userSchema);

// const userData = new User({name:"ShubhamJoshi",CountryCode:"+91",MobileNum:9891910548,Password:"142adfsaf"})
// userData.save();

module.exports = User;
