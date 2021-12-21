const router = require("express").Router();
const path = require("path");
const appDir = path.dirname(require.main.filename);
const options = { root: path.join(appDir, "public") };

const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    next();
  } else {
    res.redirect("/orders");
  }
};

const withoutAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
  } else {
    next();
  }
};

//homepage
router.get("/", withAuth, async (req, res) => {
  res.sendFile("home.html", options);
});

router.get("/orders", withoutAuth, async (req, res) => {
  res.sendFile("orders.html", options);
});

module.exports = router;
