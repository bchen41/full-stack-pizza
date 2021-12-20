const router = require("express").Router();
const path = require("path");
const appDir = path.dirname(require.main.filename);
const options = { root: path.join(appDir, "public") };
const withAuth = require("../utils/auth");
//homepage
router.get("/", withAuth, async (req, res) => {
  res.sendFile("home.html", options);
});

router.get("/orders", async (req, res) => {
  res.sendFile("orders.html", options);
});

module.exports = router;
