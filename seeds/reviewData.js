const { Reviews } = require("../models");

const reviewsData = [
  {
    review: "full stack pizza is amazing!",
    uder_id: 1,
  },
];

const seedReviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedReviews;
