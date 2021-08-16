const seedUsers = require('./user-seeds');
const seedShow = require('./show-seeds');
const seedReview = require('./review-seeds');
const seedRating = require('./rating-seeds');
const seedVotes = require('./vote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedRating();
  console.log('------RATING SEEDS--------');
  
  await seedUsers();
  console.log('-----USER SEEDS---------');

  await seedShow();
  console.log('------SHOW SEEDS--------');

  await seedReview();
  console.log('-------REVIEW SEEDS-------');

  await seedVotes();
  console.log('-------VOTE SEEDS-------');





  process.exit(0);
};

seedAll();