const router = require("express").Router();
const pizzaRoutes = require("./pizzasRoutes");
const userRoutes = require("./usersRoutes");
const orderRoutes = require("./ordersRoutes");
const reviewRoutes = require("./reviewsRoutes");

router.use("/pizzas", pizzaRoutes);
router.use("/users", userRoutes);
router.use("/orders", orderRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
