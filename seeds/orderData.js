const { Orders } = require("../models");

const ordersData = [
  {
    created_at: now(),
    user_id: 1,
  },
];

const seedOrders = () => Orders.bulkCreate(ordersData);

module.exports = seedOrders;
