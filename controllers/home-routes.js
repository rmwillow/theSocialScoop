const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Rating, Show, Review, Vote } = require('../models');

// get all reviews for homepage
router.get("/", (req, res) => {
    Review.findAll({
      include: [User],
    })
      .then((dbReviewData) => {
        const reviews = dbReviewData.map((review) => review.get({ plain: true }));
  
        res.render("all-reviews", { reviews });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });


module.exports = router;