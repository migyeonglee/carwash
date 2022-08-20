const { Router } = require("express");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use('/static', express.static('static'));
app.use("/data", express.static("data"))
//server port Number
const port = 3000;
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


app.get("/",(req,res)=>{
    res.render("Home");
})

app.get("/shop", (req, res) => {
    var shop_item = [
        { name: "a", price: "12,000", item_img: "/static/img/item/a.jpg", infor_img: "/static/img/Information/a.jpg" },
        { name: "b", price: "13,000", item_img: "/static/img/item/b.jpg", infor_img: "/static/img/Information/b.jpg" },
        { name: "c", price: "14,000", item_img: "/static/img/item/c.jpg", infor_img: "/static/img/Information/c.jpg" },
        { name: "d", price: "15,000", item_img: "/static/img/item/a.jpg", infor_img: "/static/img/Information/c.jpg" },
        { name: "e", price: "16,000", item_img: "/static/img/item/a.jpg", infor_img: "/static/img/Information/a.jpg" },
        { name: "f", price: "17,000", item_img: "/static/img/item/a.jpg", infor_img: "/static/img/Information/b.jpg" },
        { name: "g", price: "18,000", item_img: "/static/img/item/a.jpg", infor_img: "/static/img/Information/c.jpg" },
        { name: "h", price: "19,000", item_img: "/static/img/item/a.jpg", infor_img: "/static/img/Information/a.jpg" },
        { name: "i", price: "20,000", item_img: "/static/img/item/a.jpg", infor_img: "/static/img/Information/a.jpg" },
        { name: "j", price: "21,000", item_img: "/static/img/item/a.jpg", infor_img: "/static/img/Information/a.jpg" },

    ]
    res.render("shop", { sn: shop_item });
});

// in_shop_page
app.get("/shop_item", (req, res) => {
    var data = {
        img: req.query.img,
        name: req.query.name,
        price: req.query.price,
        infor: req.query.infor,

    }
    res.render("shop_item", { data: data });
});

app.get("/ranking", (req, res) => {
    console.log(ranking_index);
    // console.log(car_washer_name);
    res.render("ranking",{region:region,rating:rating,car_washer_name:car_washer_name,ranking_index:ranking_index});
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

