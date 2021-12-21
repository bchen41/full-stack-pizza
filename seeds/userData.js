const { Users } = require("../models");

const usersData = [
  {
    email: "bettychen41@gmail.com",
    password: "password12345",
  },
  {
    email: "christangarife95@gmail.com",
    password: "password12345",
  },
  {
    email: "harrison.j.oliner@gmail.com",
    password: "password12345",
  },
];

const seedUsers = () => Users.bulkCreate(usersData, { individualHooks: true });

module.exports = seedUsers;
