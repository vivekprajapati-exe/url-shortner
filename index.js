const express = require("express")
const URL = require('./models/url')
const app = express()
const PORT = 6969


const router = require('./routes/url')
app.router(router)

app.listen(PORT , ()=> console.log(`server started at http://locahost:${PORT}`))