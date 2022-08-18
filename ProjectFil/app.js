const express = require("express");
const app = express();
const path = require('path');
const port = 8000;

// const file=require("/Users/song-giyeong/car_washer/carwash/carwash_data.json");

app.set('view engine', 'ejs'); //'ejs'탬플릿을 엔진으로 한다.
app.use("/static", express.static("static"))
app.use("/data", express.static("data"))
let ranking_index={"서울특별시":[],"부산광역시":[],"대구광역시":[],"인천광역시":[],"울산광역시":[],"대전광역시":[]}

let rating={};
var region = ["서울특별시","부산광역시","대구광역시","인천광역시","울산광역시","대전광역시"];
for (let index = 0; index < region.length; index++) {
    let file=require(`./data/ranking_${region[index]}.json`);
    for (let i = 0; i< file.length; i++) {
        
        ranking_index[region[index]].push(i);
        
    }
    
}
var car_washer_name={"서울특별시":[],"부산광역시":[],"대구광역시":[],"인천광역시":[],"울산광역시":[],"대전광역시":[]};
const a=()=>{
    for(let index=0;index<region.length;index++){
        let file=require(`./data/ranking_${region[index]}.json`);
        let file2=require(`./data/carwash_${region[index]}.json`);
        rating[region[index]]=file;
        // console.log(file2.length)
        for(let i=0;i<file2.length;i++){
            car_washer_name[region[index]].push(file2[i]["사업장명"]);
        }
    }
}

a()

playAlert = setInterval(function() {
    a()
}, 3600000);



app.get("/", (req, res) => {
    res.render("template");
})

app.get("/ranking", (req, res) => {
    // console.log(rating);
    // console.log(car_washer_name);
    res.render("ranking",{region:region,rating:rating,car_washer_name:car_washer_name,ranking_index:ranking_index});
})

app.listen(port, () => {
    console.log("server open: ", port);
})