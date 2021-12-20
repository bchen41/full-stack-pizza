const withAuth = (req, res, next) => {
  console.log(req.session);
  if (!req.session.loggedIn) {
    next();
  } else {
    res.redirect("/orders");
  }
};

module.exports = withAuth;
