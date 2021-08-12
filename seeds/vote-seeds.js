const { Vote } = require('../models');

const votedata = [
  {
    user_id: 1,
    review_id: 20
  },
  {
    user_id: 2,
    review_id: 20
  },
  {
    user_id: 3,
    review_id: 19
  },
  {
    user_id: 4,
    review_id: 19
  },
  {
    user_id: 5,
    review_id: 18
  },
  {
    user_id: 6,
    review_id: 18
  },
  {
    user_id: 7,
    review_id: 17
  },
  {
    user_id: 8,
    review_id: 17
  },
  {
    user_id: 9,
    review_id: 17
  },
  {
    user_id: 10,
    review_id: 16
  },
  {
    user_id: 1,
    review_id: 16
  },
  {
    user_id: 2,
    review_id: 16
  },
  {
    user_id: 3,
    review_id: 15
  },
  {
    user_id: 4,
    review_id: 15
  },
  {
    user_id: 5,
    review_id: 15
  },
  {
    user_id: 6,
    review_id: 14
  },
  {
    user_id: 7,
    review_id: 14
  },
  {
    user_id: 8,
    review_id: 14
  },
  {
    user_id: 6,
    review_id: 13
  },
  {
    user_id: 9,
    review_id: 13
  },
  {
    user_id: 10,
    review_id: 13
  },
  {
    user_id: 1,
    review_id: 12
  },
  {
    user_id: 2,
    review_id: 12
  },
  {
    user_id: 3,
    review_id: 12
  },
  {
    user_id: 4,
    review_id: 12
  },
  {
    user_id: 5,
    review_id: 12
  },
  {
    user_id: 6,
    review_id: 11
  },
  {
    user_id: 7,
    review_id: 11
  },
  {
    user_id: 8,
    review_id: 11
  },
  {
    user_id: 9,
    review_id: 11
  },
  {
    user_id: 10,
    review_id: 9
  },
  {
    user_id: 1,
    review_id: 9
  },
  {
    user_id: 2,
    review_id: 9
  },
  {
    user_id: 3,
    review_id: 8
  },
  {
    user_id: 4,
    review_id: 8
  },
  {
    user_id: 5,
    review_id: 8
  },
  {
    user_id: 6,
    review_id: 8
  },
  {
    user_id: 7,
    review_id: 7
  },
  {
    user_id: 8,
    review_id: 7
  },
  {
    user_id: 9,
    review_id: 7
  },
  {
    user_id: 10,
    review_id: 6
  },
  {
    user_id: 1,
    review_id: 6
  },
  {
    user_id: 2,
    review_id: 5
  },
  {
    user_id: 3,
    review_id: 4
  },
  {
    user_id: 4,
    review_id: 4
  },
  {
    user_id: 5,
    review_id: 3
  },
  {
    user_id: 6,
    review_id: 2
  }
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
