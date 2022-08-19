const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use('/static', express.static('static'));
//server port Number
const port = 3000;
// main_shop_page
app.get("/", (req, res) => {
    var shop_item = [
        { name: "a", price: "12,000", item_image: "/static/img/item/a.jpg" },
        { name: "b", price: "12,000", item_image: "/static/img/item/b.jpg" },
        { name: "c", price: "12,000", item_image: "/static/img/item/c.jpg" },
        { name: "d", price: "12,000", item_image: "/static/img/item/a.jpg" },
        { name: "d", price: "12,000", item_image: "/static/img/item/a.jpg" },
        { name: "d", price: "12,000", item_image: "/static/img/item/a.jpg" },
        { name: "d", price: "12,000", item_image: "/static/img/item/a.jpg" },
        { name: "d", price: "12,000", item_image: "/static/img/item/a.jpg" },
        { name: "d", price: "12,000", item_image: "/static/img/item/a.jpg" },
        { name: "d", price: "12,000", item_image: "/static/img/item/a.jpg" },

    ]
    res.render("shop", { sn: shop_item });
});

// in_shop_page
app.get("/shop_item", (req, res) => {
    var data = {
        img: req.query.img,

    }
    res.render("shop_item", { data: data });
});
// server open
app.listen(port, () => {
    console.log("server open : ", port);
});