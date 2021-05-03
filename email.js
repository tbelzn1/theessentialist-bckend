


const { Email } = require('@material-ui/icons')
const express = require('express')
const em = express.Router()
const nodemailer = require('nodemailer')



console.log("from sendToMe")



const transport = {
  //all of the configuration for making a site send an email.

  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'theessentialist.biz@gmail.com',
    pass: 'College2021'
  }
};

const transporter = nodemailer.createTransport(transport);
  transporter.verify((error, success) => {
    if(error) {
      //if error happened code ends here
      console.error(error)
    } else {
      //this means success
      console.log('users ready to mail myself')
    }
  });

  em.post('/', (req,res, next) => {
    //make mailable object
    const mail = {
      from: process.env.THE_EMAIL,
      to: 'jhildz737@gmail.com',
      subject: req.body.subject,
      text: `
from: ${req.body.name}
      
contact: ${req.body.email}
      
message: ${req.body.text}`
      
    }
    transporter.sendMail(mail, (err,data) => {
      if(err) {
        res.json({
          status: 'fail'
        })
        console.log('fail')
      } else {
        res.json({
          status: 'success'
        })
        console.log('faidsfsdfl')
      }
    })
  });

  module.exports = em
