
const { Router } = require("express");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use('/static', express.static('static'));
app.use("/data", express.static("data"));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//server port Number
const port = 3000;
var region = ["서울특별시", "부산광역시", "대구광역시", "인천광역시", "울산광역시", "대전광역시"];


app.get("/", (req, res) => {

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
        infor: req.query.infor
    }
    res.render("shop_item", { data: data });
});

app.get("/ranking", (req, res) => {
    let ranking_index = { "서울특별시": [], "부산광역시": [], "대구광역시": [], "인천광역시": [], "울산광역시": [], "대전광역시": [] }
    let rating = {};
    const fs1=require('fs')
    for (let index = 0; index < region.length; index++) {
        let file = JSON.parse(fs1.readFileSync(`./data/ranking_${region[index]}.json`));
        console.log(file[0])
        for (let i = 0; i < file.length; i++) {

            ranking_index[region[index]].push(i);









        }

    }
    var car_washer_name = { "서울특별시": [], "부산광역시": [], "대구광역시": [], "인천광역시": [], "울산광역시": [], "대전광역시": [] };
    for (let index = 0; index < region.length; index++) {
        let file = JSON.parse(fs1.readFileSync(`./data/ranking_${region[index]}.json`));
        let file2 = JSON.parse(fs1.readFileSync(`./data/carwash_${region[index]}.json`));
        rating[region[index]] = file;
        // console.log(file2.length)
        for (let i = 0; i < file2.length; i++) {
            car_washer_name[region[index]].push(file2[i]);
        }
    }
    console.log("get",rating["서울특별시"]);
    for(let i=0;i<region.length;i++){
        rating[region[i]].sort(function(a,b){
            return b.like - a.like;
        })
    }
    console.log("get",rating["서울특별시"]);
    // console.log(car_washer_name);
    res.render("ranking", { region: region, rating: rating, car_washer_name: car_washer_name, ranking_index: ranking_index });
})



app.get("/club", (req, res) => {
    var clubdetail1 = [
        {
            name: "세린이즈",
            subname: "세린이들의 모임!",
            main_img: "/static/img/carwash_clubimg1.jpg",
            progress_man: "520명",
            backmaintext: "세차환자는 오지마세요!",
            backsubtext: "세차용품 무상지원 합니다.",
            progressStyle: "width:40%",
            memberCount: "520",
            clubconImg: "/static/img/carwash_img9.jpg"
        },
        {
            name: "초보자",
            subname: "초보자들의 모임!",
            main_img: "/static/img/carwash_img2.jpg",
            progress_man: "2050명",
            backmaintext: "공지사항",
            backsubtext: "코로나로 인해 오프라인 모임 금지입니다.",
            progressStyle: "width:75%",
            memberCount: "2050",
            clubconImg: "/static/img/carwash_img8.jpg"
        },
        {
            name: "서울세차",
            subname: "서울세차 모임!",
            main_img: "/static/img/carwash_img3.jpg",
            progress_man: "10명",
            backmaintext: "서울사람만 오세요",
            backsubtext: "타지역 출입금지!",
            progressStyle: "width:15%",
            memberCount: "10",
            clubconImg: "/static/img/carwash_img7.jpg"
        },
        {
            name: "의정부환자모여라",
            subname: "의정부 세차환자 모임!",
            main_img: "/static/img/carwash_img4.jpg",
            progress_man: "405명",
            backmaintext: "주의!",
            backsubtext: "가입은 경기북부까지만 가능합니다.",
            progressStyle: "width:24%",
            memberCount: "405",
            clubconImg: "/static/img/carwash_img6.jpg"
        },
        {
            name: "어려운세차",
            subname: "어려운세차 모임!",
            main_img: "/static/img/carwash_img5.jpg",
            progress_man: "6042명",
            backmaintext: "초보자는 오지마세요.",
            backsubtext: "기본 세차시간 3시간입니다.",
            progressStyle: "width:88%",
            memberCount: "6042",
            clubconImg: "/static/img/carwash_img5.jpg"
        },
        {
            name: "카워시스",
            subname: "세차 모임!",
            main_img: "/static/img/carwash_img6.jpg",
            progress_man: "2500명",
            backmaintext: "알림",
            backsubtext: "세차 좋아한다면 누구든지 오세요.",
            progressStyle: "width:55%",
            memberCount: "2500",
            clubconImg: "/static/img/carwash_img4.jpg"
        },
        {
            name: "차차차",
            subname: "차가좋아 모임!",
            main_img: "/static/img/carwash_img7.jpg",
            progress_man: "9230명",
            backmaintext: "공지사항",
            backsubtext: "자동세차 한번이라도 돌렸으면 오지마세요.",
            progressStyle: "width:85%",
            memberCount: "9230",
            clubconImg: "/static/img/carwash_img3.jpg"
        },
        {
            name: "외제차버블",
            subname: "버블버블 모임!",
            main_img: "/static/img/carwash_img8.jpg",
            progress_man: "30명",
            backmaintext: "외제차 세차 모임입니다.",
            backsubtext: "국산차는 가입불가!",
            progressStyle: "width:15%",
            memberCount: "30",
            clubconImg: "/static/img/carwash_img2.jpg"
        },
        {
            name: "포폼블스",
            subname: "포르쉐 폼블폼블 모임!",
            main_img: "/static/img/carwash_img9.jpg",
            progress_man: "250명",
            backmaintext: "알림!",
            backsubtext: "포르쉐 차주 세차모임",
            progressStyle: "width:45%",
            memberCount: "250",
            clubconImg: "/static/img/carwash_img1.jpg"
        },
    ]
    res.render("club", { cn: clubdetail1 });
});





// in_clubdetail1
app.get("/clubdetail1", (req, res) => {
    var clubdata = {
        img: req.query.img,
        name: req.query.name,
        memberCount: req.query.memberCount,
        clubconImg: req.query.clubconImg,
    }
    res.render("clubdetail1", { clubdata: clubdata });
});



app.get("/search", (req, res) => {
    let ranking_index = { "서울특별시": [], "부산광역시": [], "대구광역시": [], "인천광역시": [], "울산광역시": [], "대전광역시": [] }
    let rating = {};
    const fs1=require('fs')
    for (let index = 0; index < region.length; index++) {
        let file = JSON.parse(fs1.readFileSync(`./data/ranking_${region[index]}.json`));
        console.log(file[0])
        for (let i = 0; i < file.length; i++) {

            ranking_index[region[index]].push(i);

        }

    }
    var car_washer_name = { "서울특별시": [], "부산광역시": [], "대구광역시": [], "인천광역시": [], "울산광역시": [], "대전광역시": [] };
    for (let index = 0; index < region.length; index++) {
        let file = JSON.parse(fs1.readFileSync(`./data/ranking_${region[index]}.json`));
        let file2 = JSON.parse(fs1.readFileSync(`./data/carwash_${region[index]}.json`));
        rating[region[index]] = file;
        // console.log(file2.length)
        for (let i = 0; i < file2.length; i++) {
            car_washer_name[region[index]].push(file2[i]);
        }
    }
    console.log("get",rating["서울특별시"]);
    console.log("get",rating["서울특별시"]);
    res.render("search", { region: region, rating: rating, car_washer_name: car_washer_name, ranking_index: ranking_index });
})
app.post('/post', function (req, res) {

    //console.log(req.body)
    let data = req.body.data;

    console.log('post',JSON.parse(data)["서울특별시"]);
    let real_data = JSON.parse(data);
    // console.log(real_data["서울특별시"]);
    let fs = require("fs")
    for (let index = 0; index < region.length; index++) {
        fs.writeFileSync(`./data/ranking_${region[index]}.json`, JSON.stringify(real_data[region[index]]), function (err) {
            if (err) throw err;
            console.log('complete');
        }
        );
        
    }

    
    var result = ' Succese';
    res.send({ result: result });

});


app.listen(port, () => {
    console.log("server open: ", port);

})

