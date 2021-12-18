const { Users } = require("../models");

const usersData = [
  {
    email: "betty@email.com",
    password: "password12345",
  },
  {
    email: "chris@gmail.com",
    password: "password12345",
  },
  {
    email: "harrison@aol.com",
    password: "password12345",
  },
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;
