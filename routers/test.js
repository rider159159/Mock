const express = require('express');
const app = express();
const sleep = require("../utils/sleep"); 
const multer = require("multer");
const fs = require("fs");
var Mock = require('mockjs')


app.post('/test', async (req, res) => {
   await sleep(0)
  var Random = Mock.Random;
  let img=Random.image('200x100', '#894FC4', '#FFF', 'png', '!')
  console.log(img,"img")
  
  
let data = Mock.mock({
  "number|1-100": 100
})
console.log(data,"data")
  
   console.log("test")
   //res.status(401);
   res.json({ title: 'wayne53535522', message: 'Hello there!'})
})

app.get('/courses', (req, res) => {
   res.json({
     courses: [{
      id: 1,
      name: "進入 python 的魔法世界 - 第一次學程式入門課",
      color:"#b5b5ac",
      img: "https://bulma.io/images/placeholders/1280x960.png",
      description: "這堂課使用python turtle 模組來創造幾何畫作，課程使用繪圖指令來講述程式語言的重要觀念，讓你打好程式語言的基礎。",
      introduction: "",
    },{
      id: 2,
      name: "基礎教學資訊科技基礎教學",
      color:"#b5b5ac",
      img: "https://bulma.io/images/placeholders/1280x960.png",
      description: "這堂課教導基礎教學資訊科技基礎教學。",
      introduction: ""
    },{
      id: 3,
      name: "illustrator基礎教學",
      color:"#f52e36",
      img: "https://bulma.io/images/placeholders/1280x960.png",
      description: "這堂課教導illustrator。",
      introduction: ""
    }]

   })
})

app.get('/pet', (req, res) => {
  //console.log(req.body,"req.body")
  //console.log(req.params.id," req.params.id")
  //console.log(req.query,"req.query")
  //  res.status(405); //405
   res.json({
    "id": 15435006010213,
    "category": {
      "id": 0,
      "name": "string"
    },
    "name": "doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  })
  })

app.post('/form', async (req, res) => {
   await sleep(0)
   console.log(req.body,"req.body")
   //res.status(401);
   res.json({ title: 'wayne53535522', message: 'Hello there!'})
})

app.post("/file", async (req, res, next) => {
  let dir = "uploads";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./" + dir + "/");
    },
    filename: (req, file, cb) => {
      var name = file.originalname;
      var ext = name.split(".")[name.split(".").length - 1];
      cb(null, Date.now() + "." + ext);
    }
  });
  var upload = multer({ storage: storage }).single("videoFile");

  upload(req, res, (err)=> {
    //回傳值
    res.status(200);
    res.json({
      code: 200,
      message: "上傳成功"
    });
  });
});


module.exports = app
