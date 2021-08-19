const router = require("express").Router();
const { Review, Vote, User, Show } = require("../../models");
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

//get all reviews
router.get("/", (req, res) => {
  Review.findAll({
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
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all reviews for specific show
router.get("/:show", (req, res) => {
  Review.findAll({
    where: {
      show_id: req.params.show,
    },
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create review
router.post('/', (req, res) => {
//router.post('/', withAuth, (req, res) => {
  Review.create({
    review_text: req.body.review_text,
    user_id: req.session.user_id,
    show_id: req.body.show_id,
    date_watched: req.body.date_watched
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// create upvote
router.put("/upvote", (req, res) => {
//router.put("/upvote", withAuth, (req, res) => {
  Review.upvote({ review_id: req.body.review_id, user_id: req.session.user_id }, { Vote, User })
    .then((updatedVoteData) => res.json(updatedVoteData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update review
router.put("/:id", (req, res) => {
//router.put("/:id", withAuth, (req, res) => {
  Review.update(
    {
      review_text: req.body.review_text,
      date_watched: req.body.date_watched,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbReviewData) => {
      if (!dbReviewData) {
        res.status(404).json({ message: "No review found with this id" });
        return;
      }
      res.json(dbReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all votes for specific review
router.get("/votes/:review", (req, res) => {
  Vote.findAll({
    where: {
      review_id: req.params.review,
    },
  })
    .then((dbVoteData) => res.json(dbVoteData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all votes
router.get("/votes", (req, res) => {
  Vote.findAll()
    .then((dbVoteData) => res.json(dbVoteData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete review
router.delete("/:id", (req, res) => {
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

// delete review
router.delete("/upvote/:review_id", (req, res) => {
  Vote.destroy({
    where: {
      review_id: req.params.review_id,
      user_id: req.session.user_id
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
