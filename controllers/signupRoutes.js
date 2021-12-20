const router = require("express").Router();
const { Reviews } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    res.sendFile("signup.html");
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
