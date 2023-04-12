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
  //res.status(401);
  res.json({ title: 'wayne53535522', message: 'Hello there!'})
})

app.get('/projectList', (req, res) => {
  res.json({
    data:{
      projectList: [
        {
          title: '突破百萬！S7 正反包 / S6 翻轉包｜正反反正都好看，ST@TEMENT 雙包，同步新登場！',
          image: 'https://assets.zeczec.com/asset_610614_image_big.jpg',
          id: 'revopoint-range-1',
          originalPrice: 500,
          discountPrice: 400,
        },
        {
          title: '突破百萬！S7 正反包 / S6 翻轉包｜正反反正都好看，ST@TEMENT 雙包，同步新登場！',
          image: 'https://assets.zeczec.com/asset_610614_image_big.jpg',
          id: 'revopoint-range-2',
          originalPrice: 1000,
          discountPrice: 700,
        },
        {
          title: '突破百萬！S7 正反包 / S6 翻轉包｜正反反正都好看，ST@TEMENT 雙包，同步新登場！',
          image: 'https://assets.zeczec.com/asset_610614_image_big.jpg',
          id: 'revopoint-range-3',
          originalPrice: 1000,
          discountPrice: 770,
        }
      ],
    },
    status:'success',
    code: 200,
  })
})

app.get('/memberInfo', (req, res) => {
  res.json({
    data:{
      userInfo:{
        id: 15435006010213,
        name: "Ryder",
        nickName:"桃園金城武",
        photo:"https://media.gq.com.tw/photos/5dbcb630851a4300088a852f/master/w_1600%2Cc_limit/2015070145932297.png",
        email:"rider159159@gmail.com"
      }
    },
    status:'success',
    code: 200,
  })
})

app.post('/form', async (req, res) => {
  await sleep(0)
  console.log(req.body,"req.body")
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
