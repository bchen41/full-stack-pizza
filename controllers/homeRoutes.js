const router = require("express").Router();

//homepage
router.get("/", async (req, res) => {
    try {
        // const nonUserData = await Post.findAll({
        //     include: [Pizzas],
        //     include: [Orders],
        //     include: [
        //         Users,
        //         {
        //             model: Reviews,
        //             include: [Users],
        //         },
        //     ],
        // });

        // const loadData = nonUserData.map((post) => post.get({ plain: true }));

        // res.render("all data except user", { loadData });
        res.sendFile('index.html')
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
