const router = require("express").Router();
const { Users, Orders, Pizzas } = require("../../models");
const sendMail = require("../api/email.js");

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
  if (req.session.email) {
    sendMail();
  }
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
    res.status(200).json(orderModel);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
