const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const nodemailer = require('nodemailer')
const port = 3000

const email = express.Router()

module.exports = email

app.use(morgan('dev'))

app.use(express.json())

app.listen(port, () => {
    console.log(`app is live on ${port}`)
  })

  app.use('/email', require('./components/email'));