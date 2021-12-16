const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Addons extends Model {}

Addons.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  addon_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  addon_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: false,
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "addons",
});

module.exports = Addons;
