const router = require("express").Router();
const { Review } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
    Review.findAll({
      where: {
        userId: req.session.userId
      }
    })
      .then(dbReviewData => {
        const reviews = dbReviewData.map((review) => review.get({ plain: true }));
        
        res.render('dashboard', { 
          reviews,
          loggedIn: true
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

  router.get("/edit/:review", withAuth, (req, res) => {
    Post.findByPk(req.params.id)
      .then(dbReviewData => {
        if (dbReviewData) {
          const reviews = dbReviewData.get({ plain: true });
          
          res.render("edit-review", {
            layout: "dashboard",
            reviews
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  

module.exports = router;