const router = require("express").Router();
const { Users, Reviews } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const reviewModels = await Reviews.findAll({
      include: [{ model: Users, attributes: ["email"] }],
    });

    res.status(200).json(reviewModels);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const reviewId = req.params.id;
    const reviewModel = await Reviews.findByPk(reviewId, {
      include: [{ model: Users, attributes: ["email"] }],
    });
    res.status(200).json(reviewModel);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newReview = req.body;
    const reviewModel = await Reviews.create(newReview);
    res.status(200).json(reviewModel);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
