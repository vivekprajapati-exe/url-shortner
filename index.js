const express = require("express")
const URL = require('./models/url')
const app = express()
const router = require('./routes/url')
const { ConnectMongodb } = require('./connection.js')
const PORT = 6969

ConnectMongodb("mongodb://127.0.0.1:27017/url-shortner")
.then(()=>{ 
    console.log("mongo connected")
})
.catch((err)=>{
    console.log(`${err} this is the error`);
})

app.use('/url' ,router) 

app.listen(PORT , ()=> console.log(`server started at http://locahost:${PORT}`))