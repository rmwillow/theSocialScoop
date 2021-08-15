const { Rating } = require('../models')

const ratingData = [
    {
        user_id: 6,
        show_id: 3,
        rating: 1,
    },
    {
        user_id: 9,
        show_id: 4,
        rating: 2,
    },
    {
        user_id: 7,
        show_id: 5,
        rating: 3,
    }
];

const seedRating = () => Rating.bulkCreate(ratingData);

module.exports = seedRating;