const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pizzas extends Model {}

Pizzas.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  addons_ids: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "pizzas",
});

module.exports = Pizzas;
