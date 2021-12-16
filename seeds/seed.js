const sequelize = require("../config/connection");
const { User } = require("../models");

const userSeedData = require("./userData.js");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

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
