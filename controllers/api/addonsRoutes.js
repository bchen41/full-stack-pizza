const router = require("express").Router();
const { Addons } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const addonModels = await Addons.findAll();
    res.status(200).json(addonModels);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
