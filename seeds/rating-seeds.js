const { Rating } = require('../models')

const ratingData = [
    {
        user_id: 6,
        show_id: 3,
        rating: 1,
    },
    {
        user_id: 1,
        show_id: 4,
        rating: 2,
    },
    {
        user_id: 2,
        show_id: 5,
        rating: 3,
    },
    {
        user_id: 3,
        show_id: 1,
        rating: 2,
    },
    {
        user_id: 4,
        show_id: 4,
        rating: 4,
    },
    {
        user_id: 5,
        show_id: 6,
        rating: 3,
    },
    {
        user_id: 1,
        show_id: 2,
        rating: 5,
    }
];

const seedRating = () => Rating.bulkCreate(ratingData);

module.exports = seedRating;