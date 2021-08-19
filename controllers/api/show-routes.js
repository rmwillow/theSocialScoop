const router = require("express").Router();
const { Rating, Review, Show, User, Vote } = require("../../models");
const sequelize = require("../../config/connection");

// get all show info
router.get("/", (req, res) => {
  Show.findAll({
    attributes: [
      "id",
      "title",
      "overview",
      "poster_path",
      "genre",
      "season_count",
      "episode_count",
      "createdBy",
      "airDate",
      [
        sequelize.literal(
          "(SELECT ROUND(AVG(rating),1) FROM rating WHERE show.id = rating.show_id)"
        ),
        "rating_average",
      ],
    ],
    include: [
      {
        model: Review,
        attributes: [
          "id",
          "review_text",
          "user_id",
          "show_id",
          "date_watched",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((showData) => res.json(showData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a specified show's info
router.get("/:id", (req, res) => {
  let user_id;
  if (!req.session.user_id) {
    user_id = 0;
  } else {
    user_id = req.session.user_id;
  }

  Show.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "overview",
      "poster_path",
      "genre",
      "season_count",
      "episode_count",
      "apiId",
      [
        sequelize.literal(
          "(SELECT ROUND(AVG(rating),1) FROM rating WHERE show.id = rating.show_id)"
        ),
        "rating_average",
      ],
      [
        sequelize.literal(
          `(SELECT ROUND(AVG(COALESCE(rating, 0)),1) FROM rating AS show_ratings WHERE show_ratings.show_id = show.id AND show_ratings.user_id = ${user_id})`
        ),
        "active_user_rating",
      ],
    ],
    include: [
      {
        model: Review,
        attributes: [
          "id",
          "review_text",
          "user_id",
          "show_id",
          "date_watched",
          "created_at",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM vote AS voted_reviews WHERE voted_reviews.review_id = reviews.id)"
            ),
            "vote_count",
          ],
          [
            sequelize.literal(
              `(SELECT COUNT(*) FROM vote AS voted_reviews WHERE voted_reviews.review_id = reviews.id AND voted_reviews.user_id = ${user_id})`
            ),
            "active_user_vote",
          ],
        ],
        include: [
          {
            model: User,
            attributes: ["username"],
          },
          {
              model: Vote,
              attributes: ["review_id", "user_id"]
          }
        ],
      },
    ],
  })
    .then((showData) => {
      if (!showData) {
        res.status(404).json({ message: "No show found with this id!" });
        return;
      }
      res.json(showData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add rating to show
router.put("/rate", (req, res) => {
  // custom static method created in models/Show.js
  Show.rateShow({ ...req.body, user_id: req.session.user_id }, { Rating, User })
    .then((updatedShowData) => res.json(updatedShowData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
