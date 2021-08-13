const router = require("express").Router();
const { Rating } = require("../../models");

// get all ratings info
router.get(('/'), (req, res) => {
    Rating.findAll({
        attributes: [
            "id", "user_id", "show_id", "rating"
        ]
    })
    .then(ratingData => res.json(ratingData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;