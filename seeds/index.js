//const seedUsers = require('./user-seeds');
const seedShow = require('./show-seeds');
const seedReview = require('./review-seeds');
//const seedRating = require('./rating-seeds');
const seedVotes = require('./vote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedShow();
  console.log('--------------');

  await seedReview();
  console.log('--------------');

  await seedRating();
  console.log('--------------');

  await seedVotes();
  console.log('--------------');

  process.exit(0);
};

seedAll();