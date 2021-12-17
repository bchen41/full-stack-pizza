const router = require("express").Router();
const pizzaRoutes = require("./pizzaRoutes");
// const userRoutes = require("./userRoutes");
// const orderRoutes = require("./ordersRoutes");
// const reviewRoutes = require("./reviewsRoutes");

router.use("/pizza", pizzaRoutes);
// router.use("/user", userRoutes);
// router.use("/orders", orderRoutes);
// router.use("/reviews", reviewRoutes);

module.exports = router;
