const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Orders extends Model {}

const options = {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: "orders",
};

Orders.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  options
);

module.exports = Orders;
