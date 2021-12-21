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
  console.log("sendMail invoked");

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
      console.log("transporter.sendMail - ERROR: ", err);
    } else {
      console.log(info);
    }
  });
}

// var nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport({
//   service: "gmail",
//     auth: {
//       user: 'harrison.j.oliner@gmail.com',
//       pass: 'password'
//     },
//   });

// var mailoptions = {
//   from: 'harrison.j.oliner@gmail.com',
//   to: '',
//   subject: 'come try our pizza',
//   text: 'come try our pizza'
// };

// transporter.sendMail(mailoptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent' + info.response);
//   }
// });

// "use strict";
// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

module.exports = sendMail;
