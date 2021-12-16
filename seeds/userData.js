const { Users } = require("../models");

const usersData = [
  {
    name: "Betty",
    email: "betty@email.com",
    password: "password12345",
  },
  {
    name: "Chris",
    email: "chris@gmail.com",
    password: "password12345",
  },
  {
    name: "Harrison",
    email: "harrison@aol.com",
    password: "password12345",
  },
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;
