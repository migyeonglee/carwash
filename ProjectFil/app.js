const { Router } = require("express");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use('/static', express.static('static'));
app.use("/data", express.static("data"))
    //server port Number
const port = 3000;
let ranking_index = { "서울특별시": [], "부산광역시": [], "대구광역시": [], "인천광역시": [], "울산광역시": [], "대전광역시": [] }
let rating = {};
var region = ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "울산광역시", "대전광역시"];
for (let index = 0; index < region.length; index++) {
    let file = require(`./data/ranking_${region[index]}.json`);
    for (let i = 0; i < file.length; i++) {

        ranking_index[region[index]].push(i);

    }

}
var car_washer_name = { "서울특별시": [], "부산광역시": [], "대구광역시": [], "인천광역시": [], "울산광역시": [], "대전광역시": [] };
const a = () => {
    for (let index = 0; index < region.length; index++) {
        let file = require(`./data/ranking_${region[index]}.json`);
        let file2 = require(`./data/carwash_${region[index]}.json`);
        rating[region[index]] = file;
        // console.log(file2.length)
        for (let i = 0; i < file2.length; i++) {
            car_washer_name[region[index]].push(file2[i]["사업장명"]);
        }
    }
}
a()
playAlert = setInterval(function() {
    a()
}, 3600000);


app.get("/", (req, res) => {
    res.render("Home");
})

app.get("/shop", (req, res) => {
    var shop_item = [
        { name: "블루믹스 마일드플러스 세차 카샴푸 500ml 소분용기 50ml 세트", price: "8,000", item_img: "/static/img/item/1.jpg", infor_img: "/static/img/Information/1.jpg" },
        { name: "케미컬가이 시트러스 워시앤글로스 473ml CWG 카샴푸", price: "16,700", item_img: "/static/img/item/2.jpg", infor_img: "/static/img/Information/2.jpg" },
        { name: "소낙스 세차샴푸 1L 식용유 카샴푸", price: "15,900", item_img: "/static/img/item/3.jpg", infor_img: "/static/img/Information/3.jpg" },
        { name: "카프로 리셋 카샴푸 500ml", price: "18,000", item_img: "/static/img/item/4.jpg", infor_img: "/static/img/Information/4.jpg" },
        { name: "라보코스메티카 퓨리피카 1L 물때제거 카샴푸", price: "40,000", item_img: "/static/img/item/5.jpg", infor_img: "/static/img/Information/5.jpg" },
        { name: "마프라 매니악 블랙 앤 랩 샴푸 500ml", price: "22,000", item_img: "/static/img/item/6.jpg", infor_img: "/static/img/Information/6.jpg" },
        { name: "TAC시스템 택시폼 500ml 스노우폼 산성 폼샴푸", price: "13,000", item_img: "/static/img/item/7.jpg", infor_img: "/static/img/Information/7.jpg" },
        { name: "글로스브로 버블밤 500ml 고농축카샴푸", price: "13,500", item_img: "/static/img/item/8.jpg", infor_img: "/static/img/Information/8.jpg" },
        { name: "파인파티클 샴스터 샴푸부스터 500ml", price: "12,000", item_img: "/static/img/item/9.jpg", infor_img: "/static/img/Information/9.jpg" },
        { name: "TAC시스템 택디폼 500ml 스노우폼 알칼리성 폼샴푸", price: "12,000", item_img: "/static/img/item/10.jpg", infor_img: "/static/img/Information/10.jpg" },
        { name: "소낙스 세차샴푸(식용유) 1L +소분계량용기 세트 카샴푸", price: "16,000", item_img: "/static/img/item/11.jpg", infor_img: "/static/img/Information/11.jpg" },
        { name: "더클래스 버블맥스 카샴푸 1L 기능성 카샴푸", price: "13,900", item_img: "/static/img/item/12.jpg", infor_img: "/static/img/Information/12.jpg" },
        { name: "케미컬가이 글로스웍 오토워시 카샴푸 473ml", price: "21,900", item_img: "/static/img/item/13.jpg", infor_img: "/static/img/Information/13.jpg" },
        { name: "AD오토브라이트 퍼플벨벳 하이글로스 카샴푸 500ml", price: "22,000", item_img: "/static/img/item/14.jpg", infor_img: "/static/img/Information/14.jpg" },
        { name: "TAC 3pH 중성 산성 알칼리성 프리워시 3종세트", price: "33,000", item_img: "/static/img/item/15.jpg", infor_img: "/static/img/Information/15.jpg" },
        { name: "TAC시스템 중성 카샴푸 500ml", price: "8,000", item_img: "/static/img/item/16.jpg", infor_img: "/static/img/Information/16.jpg" },
        { name: "디테일링닥터스 씨사이드 브리즈 폼 샴푸 500ml", price: "10,000", item_img: "/static/img/item/17.jpg", infor_img: "/static/img/Information/17.jpg" },
        { name: "매스코닉 실키 카샴푸 500ml", price: "18,500", item_img: "/static/img/item/18.jpg", infor_img: "/static/img/Information/18.jpg" },
        { name: "글로스브로 크림밤 500ml 카샴푸", price: "10,000", item_img: "/static/img/item/19.jpg", infor_img: "/static/img/Information/19.jpg" },
        { name: "바인더 프리미엄 카샴푸 500ml", price: "8,000", item_img: "/static/img/item/20.jpg", infor_img: "/static/img/Information/20.jpg" },

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
    res.render("ranking", { region: region, rating: rating, car_washer_name: car_washer_name, ranking_index: ranking_index });
})



app.get("/club", (req, res) => {
    res.render("club");
})

app.get("/clubdetail1", (req, res) => {
    res.render("clubdetail1");
})

app.listen(port, () => {
    console.log("server open: ", port);

})