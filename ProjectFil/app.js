const express = require("express");
const app = express();
const path = require('path');
const port = 8000;

// const file=require("/Users/song-giyeong/car_washer/carwash/carwash_data.json");

app.set('view engine', 'ejs'); //'ejs'탬플릿을 엔진으로 한다.
app.use("/static", express.static("static"))
app.use("/data", express.static("data"))

var file=require("./data/carwash_daejun.json")

let ranking={};
var region = ["seoul","busan","daegu","inchun","ulsan","daejun"];
for(let index=0;index<region.length;index++){
    var file=require(`./data/carwash_${region[index]}.json`);
    ranking[region[index]]=file;
}




app.get("/", (req, res) => {
    res.render("template");
})

app.get("/ranking", (req, res) => {
    res.render("ranking",file);
})

app.listen(port, () => {
    console.log("server open: ", port);
})