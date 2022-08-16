const express=require("express");
const app=express();
const path = require('path');
const port=8000;

// const file=require("/Users/song-giyeong/car_washer/carwash/carwash_data.json");

app.set('view engine', 'ejs'); //'ejs'탬플릿을 엔진으로 한다.
app.set('views', path.join(__dirname, 'views')); //폴더, 폴더경로 지정




app.get("/",(req,res)=>{
    res.render("template");
})
app.listen(port,()=>{
    console.log("server open: ",port);
})