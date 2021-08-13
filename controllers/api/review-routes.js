const router = require("express").Router();
const { Review } = require("../../models");
//const withAuth = require('../../utils/auth');

// get all reviews
router.get("/", (req, res) => {
  Review.findAll()
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  //router.post('/', withAuth, (req, res) => {
  Review.create({
    review_text: req.body.review_text,
    user_id: req.session.user_id,
    show_id: req.body.show_id,
    date_watched: req.body.date_watched,
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/upvote', (req, res) => {
//router.put('/upvote', withAuth, (req, res) => {
    Review.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, User })
      .then(updatedVoteData => res.json(updatedVoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.put('/:id', (req, res) => {
//router.put('/:id', withAuth, (req, res) => {
    Post.update(
      {
        review_text: req.body.review_text,
        date_watched: req.body.date_watched
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbReviewData => {
        if (!dbReviewData) {
          res.status(404).json({ message: 'No review found with this id' });
          return;
        }
        res.json(dbReviewData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.delete('/:id', (req, res) => {
//router.delete("/:id", withAuth, (req, res) => {
  Review.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbReviewData) => {
      if (!dbReviewData) {
        res.status(404).json({ message: "No comment found with this id!" });
        return;
      }
      res.json(dbReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
