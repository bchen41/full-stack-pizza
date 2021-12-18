const router = require("express").Router();
const { Users, Orders, Pizzas } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const orderModels = await Orders.findAll({
      include: [{ model: Users, attributes: ["email"] }, { model: Pizzas }],
    });
    res.status(200).json(orderModels);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
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
  try {
    const newOrder = req.body;
    // newOrder.created_at = new Date();
    const orderModel = await Orders.create(newOrder);
    res.status(200).json(orderModel);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
