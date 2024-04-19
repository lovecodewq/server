require('dotenv').config();

const express = require('express')
const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})
const app = express()
app.use((request, response)=>{
    response.json({message: 'Hey! this is liwenqiang'})
})

module.exports = app;