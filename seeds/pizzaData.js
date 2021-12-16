const { Pizzas } = require("../models");

const pizzasData = [
  {
    order_id: 1,
    addons_ids: "[1, 2, 4, 6, 7]",
  },
];

const seedPizzas = () => Pizzas.bulkCreate(pizzasData);

module.exports = seedPizzas;
