const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Rating, Show, Review, Vote } = require('../models');

module.exports = router;

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    res.render('login');
});