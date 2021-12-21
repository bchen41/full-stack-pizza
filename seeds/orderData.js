const { Orders } = require("../models");

const ordersData = [
  {
    user_id: 1,
  },
  {
    user_id: 2,
  },
  {
    user_id: 2,
  },
];

const seedOrders = () => Orders.bulkCreate(ordersData);

module.exports = seedOrders;
