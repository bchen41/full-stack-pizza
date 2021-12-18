const { Reviews } = require("../models");

const reviewsData = [
  {
    review: "full stack pizza is amazing! unlimited add ons!",
    user_id: 1,
  },
  {
    review: "10 out of 10 would come back to full stack pizza again!",
    user_id: 2,
  },
  {
    review: "one-of-a-kind pizza restaurant!",
    user_id: 3,
  },
];

const seedReviews = () => Reviews.bulkCreate(reviewsData);

module.exports = seedReviews;
