const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
const signupRoutes = require("./signupRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/signup", signupRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
