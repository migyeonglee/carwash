const express=require("express");
const app=express();
const path = require('path');
const port=3000;

// const file=require("/Users/song-giyeong/car_washer/carwash/carwash_data.json");

app.set('view engine', 'ejs'); //'ejs'탬플릿을 엔진으로 한다.
app.use("/static", express.static("static"))
app.use("/data", express.static("data"))




app.get("/",(req,res)=>{
    res.render("Home");
})

app.get("/club",(req,res)=>{
    res.render("club");
})

app.get("/clubdetail1",(req,res)=>{
    res.render("clubdetail1");
})

app.listen(port,()=>{
    console.log("server open: ",port);
})