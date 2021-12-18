const { Pizzas } = require("../models");

const pizzasData = [
  {
    order_id: 1,
    addons_ids: "[1, 3, 6, 10, 14]",
  },
  {
    order_id: 2,
    addons_ids: "[1, 2, 4, 9, 15]",
  },
  {
    order_id: 2,
    addons_ids: "[1, 2, 4, 9, 11, 12, 15]",
  },
  {
    order_id: 3,
    addons_ids: "[1, 3, 4, 9, 11, 12, 15]",
  },
];

const seedPizzas = () => Pizzas.bulkCreate(pizzasData);

module.exports = seedPizzas;
