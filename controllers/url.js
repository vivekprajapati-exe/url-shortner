const shortid = require('shortid')
const URL = require("../models/url")

async function handleGenerateNewShortUrl (req , res){
    const body = req.body
    if(!body) return res.status(400).end("Please enter a url")
    const ShortUrl = shortid()
    await URL.create({
        shortID:ShortUrl,
        redirectUrl:body.URL,
        anyalytics:[]
    })
}
async function handleWebsiteClick (req , res){
   res.end("welcome to the website")
}

module.exports = {handleGenerateNewShortUrl , handleWebsiteClick}