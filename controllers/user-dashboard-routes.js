const router = require("express").Router();
const { Review, User, Show } = require("../models");
const sequelize = require('../config/connection');
// const withAuth = require("../utils/auth");

// withAuth,
router.get('/:id', (req, res) => {
  Review.findAll({
      where: {
          user_id: req.session.user_id
      },
      attributes: [
        "id",
        "review_text",
        "user_id",
        "show_id",
        "date_watched",
        "created_at",
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE review.id = vote.review_id)'), 'vote_count']
      ],
      include: [{
        model: User,
        attributes: ["username"],
      },
    {
      model: Show,
      attributes:["title", "poster_path"]
    }]
    })
      .then(reviewData => {
          // serialize the data before passing to template
        const reviews = reviewData.map(review => review.get({ plain: true }));
        res.render('dashboard', { 
          reviews,
          loggedIn: true
         });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      });
    });

  // withAuth,

  // router.get("/edit/:review", (req, res) => {
  //   Post.findByPk(req.params.id)
  //     .then(dbReviewData => {
  //       if (dbReviewData) {
  //         const reviews = dbReviewData.get({ plain: true });
          
  //         res.render("dashboard", {
  //           reviews, 
  //           loggedIn: true
  //         });
  //       } else {
  //         res.status(404).end();
  //       }
  //     })
  //     .catch(err => {
  //       res.status(500).json(err);
  //     });
  // });
  

module.exports = router;