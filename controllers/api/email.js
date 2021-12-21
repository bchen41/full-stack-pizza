const { text } = require("express");
const router = require("express").Router();
var nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fullstackpizza@gmail.com",
    pass: "Pizzaman1!",
  },
});

function sendMail(email, text) {
  // console.log("sendMail invoked");

  let mailInfo = {
    from: "fullstackpizza@gmail.com",
    to: "bettychen41@gmail.com",
    subject: "Full Stack Pizza Order Confirmation!",
    text: "test",
  };

  mailInfo.to = email;
  mailInfo.text = text;

  transporter.sendMail(mailInfo, (err, info) => {
    if (err) {
      // console.log("transporter.sendMail - ERROR: ", err);
    } else {
      // console.log(info);
    }
  });
}

module.exports = sendMail;
