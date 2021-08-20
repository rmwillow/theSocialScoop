const router = require('express').Router();
const { Rating, Review, Show, User, Vote } = require('../../models');
const sequelize = require('../../config/connection');

// get all show info
router.get(('/'), (req, res) => {
    Show.findAll({
        attributes: [
            "id", "title", "overview", "poster_path", "genre", "season_count", "episode_count", "createdBy", "airDate",
            [
                sequelize.literal("(SELECT ROUND(AVG(rating),1) FROM rating WHERE show.id = rating.show_id)"),
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
            "id", "title", "overview", "poster_path", "genre", "season_count", "episode_count", "createdBy", "airDate",
            [
                sequelize.literal("(SELECT ROUND(AVG(rating),1) FROM rating WHERE show.id = rating.show_id)"),
                "rating_average",
            ],
        ],
        include: [
            {
              model: Review,
              attributes: ['id', 'review_text', 'user_id', 'show_id', 'date_watched', 'created_at'],
              include: [
                  {
                model: User,
                attributes: ['id', 'username']
              },
              {
                  model: Vote,
                  attributes: ["user_id"]
                  
              }]
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

// add show to database
router.post('/', (req, res) => {
    Show.create({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        genre: req.body.genre,
        season_count: req.body.season_count,
        episode_count: req.body.episode_count,
        apiId: req.body.apiId,
        createdBy: req.body.createdBy,
        airDate: req.body.airDate
    })
    .then(showData => res.json(showData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
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