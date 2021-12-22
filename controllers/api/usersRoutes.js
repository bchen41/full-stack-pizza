const router = require("express").Router();
const { Users } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userModels = await Users.findAll({
      attributes: ["email"],
    });
    res.status(200).json(userModels);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await Users.create({
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.email = newUser.email;
      req.session.loggedIn = true;
      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const correctEmail = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!correctEmail) {
      res.status(400).json({ message: "Account not found!" });
      return;
    }

    const correctPassword = correctEmail.checkPassword(req.body.password);

    if (!correctPassword) {
      res.status(400).json({ message: "Password is incorrect!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = correctEmail.id;
      req.session.email = correctEmail.email;
      req.session.loggedIn = true;
      res.json({ correctEmail, message: "You are logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
