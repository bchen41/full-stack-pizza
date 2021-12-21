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
    to: email,
    subject: "Full Stack Pizza Order Confirmation!",
    text: text,
  };

  transporter.sendMail(mailInfo, (err, info) => {
    if (err) {
      // console.log("transporter.sendMail - ERROR: ", err);
    } else {
      // console.log(info);
    }
  });
}

module.exports = sendMail;
