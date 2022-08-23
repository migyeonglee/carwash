const express = require("express");
const app = express();
const path = require('path');
const port = 3000;


// const file=require("/Users/song-giyeong/car_washer/carwash/carwash_data.json");

app.set('view engine', 'ejs'); //'ejs'탬플릿을 엔진으로 한다.
app.use("/static", express.static("static"))
app.use("/data", express.static("data"))





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







app.get("/", (req, res) => {
    res.render("Home");
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