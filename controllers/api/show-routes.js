const router = require('express').Router();
const { Rating, Review, Show, User } = require('../../models');

// get all show info
router.get(('/'), (req, res) => {
    Show.findAll({
        attributes: [
            "id", "title", "overview", "poster_path", "genre", "season_count", "episode_count",
            [
                sequelize.literal("(SELECT AVG(rating) FROM rating WHERE show.id = rating.show_id)"),
                "rating_average",
            ],
        ],
        include: [
            {
              model: Review,
              attributes: ['id', 'review_text', 'user_id', 'show_id', 'date_watched', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            }
        ]
    })
    .then(showData => res.json(showData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a specified show's info
router.get(('/:id'), (req, res) => {
    Show.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            "id", "title", "overview", "poster_path", "genre", "season_count", "episode_count",
            [
                sequelize.literal("(SELECT AVG(rating) FROM rating WHERE show.id = rating.show_id)"),
                "rating_average",
            ],
        ],
        include: [
            {
              model: Review,
              attributes: ['id', 'review_text', 'user_id', 'show_id', 'date_watched', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            }
        ]
    })
    .then(showData => {
        if(!showData) {
            res.status(404).json({ message: "No show found with this id!" });
            return;
        }
        res.json(showData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

// add rating to show
router.put('/rate', (req, res) => {
    // custom static method created in models/Show.js
    Show.rateShow({ ...req.body, user_id: req.session.user_id }, { Rating, User })
      .then(updatedShowData => res.json(updatedShowData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;