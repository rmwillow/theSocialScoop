const router = require('express').Router();
const { User, Rating, Show, Review, Vote } = require('../models');

// get all reviews for homepage
router.get("/", (req, res) => {
  res.render('homepage');

  //   Review.findAll({
  //     include: [User],
  //   })
  //     .then((dbReviewData) => {
  //       const reviews = dbReviewData.map((review) => review.get({ plain: true }));
  
  //       res.render("all-reviews", { reviews });
  //     })
  //     .catch((err) => {
  //       res.status(500).json(err);
  //     });
  });

  // Login, Logout 7 Signup routes
  router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
  });
  
  router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("signup");
  });

module.exports = router;