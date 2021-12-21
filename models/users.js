const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Users extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },

  {
    hooks: {
      beforeCreate: async (newUserInfo) => {
        newUserInfo.password = await bcrypt.hash(newUserInfo.password, 8);
        return newUserInfo;
      },
      beforeUpdate: async (updatedUserInfo) => {
        updatedUserInfo.password = await bcrypt.hash(
          updatedUserInfo.password,
          8
        );
        return updatedUserInfo;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "users",
  }
);

module.exports = Users;
