const { Users, Pizzas, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Orders extends Model {}

Orders.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primarykey: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "orders",
});

module.exports = Orders;
