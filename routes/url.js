const express = require('express')
const router = express.Router()
const {handleGenerateNewShortUrl , handleWebsiteClick} = require('../controllers/url')
const mongoose = require('mongoose')

router.route('/')
.get(handleWebsiteClick)
.post(handleGenerateNewShortUrl)

module.exports = router
