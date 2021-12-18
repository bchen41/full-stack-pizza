const router = require("express").Router();
const userRoutes = require("./usersRoutes");
const reviewRoutes = require("./reviewsRoutes");
const orderRoutes = require("./ordersRoutes");
const pizzaRoutes = require("./pizzasRoutes");
const addonRoutes = require("./addonsRoutes");

router.use("/users", userRoutes);
router.use("/reviews", reviewRoutes);
router.use("/orders", orderRoutes);
router.use("/pizzas", pizzaRoutes);
router.use("/addons", addonRoutes);

module.exports = router;
