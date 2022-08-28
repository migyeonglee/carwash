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
        infor: req.query.infor
    }
    res.render("shop_item", { data: data });
});

app.get("/ranking", (req, res) => {
    let ranking_index = { "서울특별시": [], "부산광역시": [], "대구광역시": [], "인천광역시": [], "울산광역시": [], "대전광역시": [] }
    let rating = {};
    const fs1 = require('fs')
    for (let index = 0; index < region.length; index++) {
        let file = JSON.parse(fs1.readFileSync(`./data/ranking_${region[index]}.json`));
        //console.log(file[0])
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
    //console.log("get",rating["서울특별시"]);
    for(let i=0;i<region.length;i++){
        rating[region[i]].sort(function(a,b){
            return b.like - a.like;
        })
    }
    //console.log("get",rating["서울특별시"]);
    // console.log(car_washer_name);
    res.render("ranking", { region: region, rating: rating, car_washer_name: car_washer_name, ranking_index: ranking_index });
})



app.get("/club", (req, res) => {


    var clubdetail1 = [{
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
    const fs1 = require('fs')
    for (let index = 0; index < region.length; index++) {
        let file = JSON.parse(fs1.readFileSync(`./data/ranking_${region[index]}.json`));
        //console.log(file[0])
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
    //console.log("get",rating["서울특별시"]);
    //console.log("get",rating["서울특별시"]);

    res.render("search", { region: region, rating: rating, car_washer_name: car_washer_name, ranking_index: ranking_index });

})
app.post('/post', function(req, res) {

    //console.log(req.body)
    let data = req.body.data;


    //console.log('post',JSON.parse(data)["서울특별시"]);

    let real_data = JSON.parse(data);
    // console.log(real_data["서울특별시"]);
    let fs = require("fs")
    for (let index = 0; index < region.length; index++) {
        fs.writeFileSync(`./data/ranking_${region[index]}.json`, JSON.stringify(real_data[region[index]]), function(err) {
            if (err) throw err;
            console.log('complete');
        });

    }


    var result = ' Succese';
    res.send({ result: result });

});


app.listen(port, () => {
    console.log("server open: ", port);

})