const { Addons } = require("../models");

const addonsData = [
  {
    addon_name: "standard",
    addon_type: "pizza",
    price: 9,
    calories: 100,
  },
  {
    addon_name: "thin",
    addon_type: "crust",
    price: 0.5,
    calories: 100,
  },
  {
    addon_name: "regular",
    addon_type: "crust",
    price: 0,
    calories: 150,
  },
  {
    addon_name: "tomato",
    addon_type: "sauce",
    price: 0,
    calories: 50,
  },
  {
    addon_name: "honey bbq",
    addon_type: "sauce",
    price: 0,
    calories: 80,
  },
  {
    addon_name: "garlic parmesan",
    addon_type: "sauce",
    price: 0,
    calories: 80,
  },
  {
    addon_name: "alfredo",
    addon_type: "sauce",
    price: 0,
    calories: 100,
  },
  {
    addon_name: "ham",
    addon_type: "meat",
    price: 0,
    calories: 50,
  },
  {
    addon_name: "pepperoni",
    addon_type: "meat",
    price: 0,
    calories: 70,
  },
  {
    addon_name: "italian sausage",
    addon_type: "meat",
    price: 0,
    calories: 80,
  },
  {
    addon_name: "philly steak",
    addon_type: "meat",
    price: 1,
    calories: 90,
  },
  {
    addon_name: "onions",
    addon_type: "non-meat",
    price: 0,
    calories: 15,
  },
  {
    addon_name: "pineapples",
    addon_type: "non-meat",
    price: 0,
    calories: 30,
  },
  {
    addon_name: "mushrooms",
    addon_type: "non-meat",
    price: 0,
    calories: 20,
  },
  {
    addon_name: "roasted red peppers",
    addon_type: "non-meat",
    price: 0,
    calories: 15,
  },
];

const seedAddons = () => Addons.bulkCreate(addonsData);

module.exports = seedAddons;
