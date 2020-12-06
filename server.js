const path = require('path') //une las rutas de windows o linux
const fileupload = require('express-fileupload')
var express = require('express');
var cors = require('cors')
var app = express();
require('dotenv').config()

app.use(fileupload())
app.use(cors())
const port = process.env.PORT
const upload = require('./routes/upload')

app.use('/aws', upload)

app.listen(port, () => {
  console.log(`Run on port: ${port}`)
})