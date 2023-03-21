const Express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
const app = Express();
const User = require("./Database")
const path = require("path");

app.use(cookieParser())
app.use(Express.json());

app.use(require("./auth"));

app.use(Express.static(path.resolve(__dirname,"amazonfrontend","build")));
app.get("/",(req,res)=>{
    console.log(path.resolve(__dirname,"amazonfrontend","build"))
    res.status(200).sendFile(path.resolve(__dirname,"amazonfrontend","build"));  
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/amazonfrontend/build/index.html'));
});

app.listen(4000,()=>{
    console.log("Connection Made 4000")
})