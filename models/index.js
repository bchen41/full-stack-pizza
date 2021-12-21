const Users = require("./users");
const Orders = require("./orders");
const Reviews = require("./reviews");
const Pizzas = require("./pizzas");
const Addons = require("./addons");

Users.hasMany(Orders);
Orders.belongsTo(Users, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Users.hasMany(Reviews);
Reviews.belongsTo(Users, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Orders.hasMany(Pizzas);
Pizzas.belongsTo(Orders, {
  foreignKey: "order_id",
});

module.exports = { Orders, Pizzas, Users, Reviews, Addons };
