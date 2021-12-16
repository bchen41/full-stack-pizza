const sequelize = require("../config/connection");
const { User, Order, Review, Pizza, Addon } = require("../models");

const userSeedData = require("./userData.json");
const orderSeedData = require("./orderData.json");
const reviewSeedData = require("./reviewData.json");
const pizzaSeedData = require("./pizzaData.json");
const addonSeedData = require("./addonData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  const orders = await Order.bulkCreate(orderSeedData);
  const reviews = await Review.bulkCreate(reviewSeedData);
  const pizzas = await Pizza.bulkCreate(pizzaSeedData);
  const addons = await Addon.bulkCreate(addonSeedData);

  process.exit(0);
};

seedDatabase();
