const router = require("express").Router();

//homepage
router.get("/", async (req, res) => {
    try {
        res.sendFile('signup.html')
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
