const sequelize = require("../config/connection");
const seedUsers = require("./userData.js");
const seedOrders = require("./orderData.js");
const seedReviews = require("./reviewData.js");
const seedPizzas = require("./pizzaData");
const seedAddons = require("./addonData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log("\n *** USERS SEEDED ***\n");

  await seedOrders();
  console.log("\n *** ORDERS SEEDED ***\n");

  await seedReviews();
  console.log("\n *** REVIEWS SEEDED ***\n");

  await seedPizzas();
  console.log("\n *** PIZZAS SEEDED ***\n");

  await seedAddons();
  console.log("\n *** ADDONS SEEDED ***\n");

  process.exit(0);
};

seedDatabase();
