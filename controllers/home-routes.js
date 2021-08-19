const router = require("express").Router();
const { User, Rating, Show, Review, Vote } = require("../models");
const sequelize = require("../config/connection");
const { Op } = require("sequelize");

// GET LOGIN PAGE
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// get all shows for homepage
router.get("/", (req, res) => {
  console.log(req.session);
  Show.findAll({
    attributes: [
      "id",
      "title",
      "overview",
      "poster_path",
      "genre",
      "season_count",
      "episode_count",
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
    .then((showData) => {
      const shows = showData.map((post) => post.get({ plain: true }));

      res.render("homepage", { 
      shows,
      loggedIn: req.session.loggedIn,
      id: req.session.user_id });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// sort all shows/reviews for homepage
router.get("/sort/:type", (req, res) => {
  let orderStatement = [];
  if (req.params.type == "az") {
    orderStatement = "title ASC";
  } else if (req.params.type == "rating") {
    orderStatement = "rating_average DESC";
  }
  Show.findAll({
    attributes: [
      "id",
      "title",
      "overview",
      "poster_path",
      "genre",
      "season_count",
      "episode_count",
      [
        sequelize.literal(
          "(SELECT ROUND(AVG(rating),1) FROM rating WHERE show.id = rating.show_id)"
        ),
        "rating_average",
      ],
    ],
    order: [[sequelize.literal(orderStatement)]],
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
    .then((showData) => {
      const shows = showData.map((post) => post.get({ plain: true }));
      res.render("homepage", {
        shows,
        loggedIn: req.session.loggedIn,
        id: req.session.user_id });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all reviews/shows for homepage/search results page
router.get("/search/:term", (req, res) => {
  Show.findAll({
    where: {
      [Op.or]: {
        title: {
          [Op.like]: `${req.params.term}%`,
        },
        genre: {
          [Op.like]: `${req.params.term}%`,
        },
      },
    },
    attributes: [
      "id",
      "title",
      "overview",
      "poster_path",
      "genre",
      "season_count",
      "episode_count",
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
        include: [
          {
            model: User,
            attributes: ["username", ],
          },
        ],
      },
    ],
  })
    .then((showData) => {
      if (!showData.length) {
        res
          .status(404)
          .json({ message: "No shows found that meet this criteria!" });
        return;
      }
      const shows = showData.map((post) => post.get({ plain: true }));
      res.render("homepage", {
        shows,
        loggedIn: req.session.loggedIn,

        id: req.session.user_id
       });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// single-page routes
router.get("/shows/:id", (req, res) => {
  let user_id;
  if(!req.session.user_id) {
    user_id = 6;
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
            attributes: ["id","username"],
          },
          {
            model: Vote,
            attributes: ["user_id"]
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
      const show = showData.get({ plain: true });
      res.render("single-page", {
        show,
        loggedIn: req.session.loggedIn,
        id: req.session.user_id,

       });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
