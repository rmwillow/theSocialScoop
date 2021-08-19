const { Review } = require('../models');

const reviewdata = [
  {
    review_text: 'Donec posuere metus vitae ipsum.',
    user_id: 1,
    show_id: 1,
    date_watched: '2021-08-01'
  },
  {
    review_text: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 2,
    show_id: 2,
    date_watched: '2021-08-02'
  },
  {
    review_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 3,
    show_id: 3,
    date_watched: '2021-08-03'
  },
  {
    review_text: 'Nunc purus.',
    user_id: 4,
    show_id: 4,
    date_watched: '2021-08-04'
  },
  {
    review_text: 'Pellentesque eget nunc.',
    user_id: 5,
    show_id: 5,
    date_watched: '2021-08-05'
  },
  {
    review_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 6,
    show_id: 6,
    date_watched: '2021-08-06'
  },
  {
    review_text: 'In hac habitasse platea dictumst.',
    user_id: 1,
    show_id: 7,
    date_watched: '2021-08-07'
  },
  {
    review_text: 'In hac habitasse platea dictumst.',
    user_id: 3,
    show_id: 8,
    date_watched: '2021-08-08'
  },
  {
    review_text: 'Duis ac nibh.',
    user_id: 6,
    show_id: 9,
    date_watched: null
  },
  {
    review_text: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 3,
    show_id: 10,
    date_watched: '2021-08-10'
  },
  {
    review_text: 'In hac habitasse platea dictumst.',
    user_id: 1,
    show_id: 10,
    date_watched: '2021-08-10'
  },
  {
    review_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 2,
    show_id: 9,
    date_watched: '2021-08-09'
  },
  {
    review_text: 'Donec dapibus.',
    user_id: 3,
    show_id: 8,
    date_watched: null
  },
  {
    review_text: 'Nulla tellus.',
    user_id: 4,
    show_id: 7,
    date_watched: '2021-08-07'
  },
  {
    review_text: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    user_id: 3,
    show_id: 6,
    date_watched: '2021-08-06'
  },
  {
    review_text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 5,
    show_id: 4,
    date_watched: null
  },
  {
    review_text: 'In hac habitasse platea dictumst.',
    user_id: 1,
    show_id: 6,
    date_watched: '2021-08-06'
  },
  {
    review_text: 'Etiam justo.',
    user_id: 2,
    show_id: 7,
    date_watched: '2021-08-07'
  },
  {
    review_text: 'Nulla ut erat id mauris vulputate elementum.',
    user_id: 3,
    show_id: 8,
    date_watched: null
  },
  {
    review_text: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    user_id: 4,
    show_id: 9,
    date_watched: '2021-08-09'
  }
];

const seedPosts = () => Review.bulkCreate(reviewdata);

module.exports = seedPosts;
