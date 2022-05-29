const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());  //接收 json 資料
app.use(express.urlencoded({ extended: false })); //接收 form urlencoded 的資料

//解決 cors 的問題 
const cors = require("./utils/cors");
app.use('/*', cors);


const test = require("./routers/test");
app.use('/api', test);

const wayne1894_nuxt = require("./routers/wayne1894_nuxt");
app.use('/', wayne1894_nuxt);


app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (req, res) => res.send('Hello World222!'))


app.listen(port, () => console.log(`mock server listening at http://localhost:${port}`))
