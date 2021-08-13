const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Rating, Show, Review, Vote } = require('../models');

module.exports = router;