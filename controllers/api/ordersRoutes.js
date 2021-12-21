const router = require("express").Router();
<<<<<<< HEAD
// const SendmailTransport = require("nodemailer/lib/sendmail-transport");
// const { resolveContent } = require("nodemailer/lib/shared");
=======
>>>>>>> 969ecabe6c49fac79899284f988dc5706708b9da
const { Users, Orders, Pizzas } = require("../../models");
const sendMail = require("./email.js");

router.get("/", async (req, res) => {
  if (!req.session.user_id) {
    res.json([]);
  }
  try {
    const orderModels = await Orders.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [{ model: Pizzas }],
    });
    res.status(200).json(orderModels);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
<<<<<<< HEAD
  if (req.session.user_id){
    
  }
=======
>>>>>>> 969ecabe6c49fac79899284f988dc5706708b9da
  try {
    const orderId = req.params.id;
    const orderModel = await Orders.findByPk(orderId, {
      include: [{ model: Users, attributes: ["email"] }, { model: Pizzas }],
    });
    res.status(200).json(orderModel);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  if (!req.session.user_id) {
    res.send({ message: "Must be logged in to create a new order." });
  }
  try {
    const newOrder = {
      user_id: req.session.user_id,
    };
    const orderModel = await Orders.create(newOrder);
    let text = `You have placed an order successfully ${req.session.email}! Thank you and enjoy!`;
    sendMail(req.session.email, text);
    res.status(200).json(orderModel);
    sendMail();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
