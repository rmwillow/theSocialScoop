const router = require('express').Router();

const showRoutes = require('./show-routes');
// const ratingRoutes = require('./rating-routes');
// const reviewRoutes = require('./review-routes');
// const userRoutes = require('./user-routes');

router.use('/shows', showRoutes);
// router.use('/ratings', ratingRoutes);
// router.use('/reviews', reviewRoutes);
// router.use('/users', userRoutes);

module.exports = router;