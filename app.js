require('dotenv').config();

const express = require('express')
const cloudinary = require('cloudinary')
const bodyParse = require('body-parser')
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})
const app = express()
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.get('/', (resquest, response) => {response.json({message: 'Hey! get /'})})

app.post('/upload-image', (request, response) => {
  const data = {image: request.body.image};
  cloudinary.uploader.upload(data.image)
      .then((result) => {response.status(200).send({
              message: 'success',
              result,
            })})
      .catch((error) => {response.status(500).send({
               message: 'error',
               error,
             })})
})

module.exports = app;