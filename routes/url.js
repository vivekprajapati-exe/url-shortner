const express = require('express')
const router = express.Router()

router.route('/')
.get((req , res)=>{
    res.end("welcome to the website")
})

module.exports = router
