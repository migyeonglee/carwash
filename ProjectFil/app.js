const express = require("express");
const app = express();
const path = require('path');
const port = 8000;

// const file=require("/Users/song-giyeong/car_washer/carwash/carwash_data.json");

app.set('view engine', 'ejs'); //'ejs'탬플릿을 엔진으로 한다.
app.use("/static", express.static("static"))
app.use("/data", express.static("data"))

var file=require("./data/carwash_seoul.json")

let ranking=[]
for (let index = 0; index < file.length; index++) {
    ranking.push({
        "like":0,
        "dislike":0
    })
    
}

console.log(ranking)

let fs = require("fs")
fs.writeFile("./data/ranking_seoul.json", JSON.stringify(ranking), function (err) {
    if (err) throw err;
    console.log('complete');
}
);



app.get("/", (req, res) => {
    res.render("template");
})

app.get("/ranking", (req, res) => {
    res.render("ranking",file);
})

app.listen(port, () => {
    console.log("server open: ", port);
})