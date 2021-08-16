const router = require('express').Router();
const { Show } = require('../../models');

// get all show info
router.get(('/'), (req, res) => {
    Show.findAll({
        attributes: [
            "id", "title", "overview", "poster_path", "genre", "season_count", "episode_count"
        ]//, 
        // include: [{model: ratings, ETC. }]
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
            "id", "title", "overview", "poster_path", "genre", "season_count", "episode_count"
        ]//, 
        // include: [{model: ratings, ETC. }]
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

module.exports = router;