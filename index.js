const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());  //接收 json 資料
app.use(express.urlencoded({ extended: false })); //接收 form urlencoded 的資料

//解決 cors 的問題 
const cors = require("./utils/cors");
app.use('/*', cors);


const api = require("./routers/api");
app.use('/api', api);

app.use((req, res, next) => {
  next();
});


app.listen(port, () => console.log(`mock server listening at http://localhost:${port}`))
