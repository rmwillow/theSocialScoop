const { Rating } = require('../models')

const ratingData = [
    {
        id: 6,
        rating: 1,
        show_id: 4,
    }
];

const seedRating = () => Rating.bulkCreate(ratingData);

module.exports = seedRating;