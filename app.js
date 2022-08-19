const { Router } = require("express");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use('/static', express.static('static'));
//server port Number
const port = 3000;
// main_shop_page
app.get("/", (req, res) => {
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

// server open
app.listen(port, () => {
    console.log("server open : ", port);
});