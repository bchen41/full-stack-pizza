const router = require("express").Router();
const path = require("path");
const appDir = path.dirname(require.main.filename);
//homepage
router.get("/", async (req, res) => {
  try {
    res.sendFile("home.html", { root: path.join(appDir, "public") });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
