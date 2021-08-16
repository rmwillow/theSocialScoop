// import all models
const Show = require('./Show');
const User = require('./User');
const Review = require('./Review');
const Rating = require('./Rating')
const Vote = require('./Vote');

// create associations
User.hasMany(Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Review, {
  through: Vote,
  as: 'voted_reviews',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Review.belongsToMany(User, {
  through: Vote,
  as: 'voted_reviews',
  foreignKey: 'review_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(Review, {
  foreignKey: 'review_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Review.hasMany(Vote, {
  foreignKey: 'post_id'
});

Show.hasMany(Review, {
  foreignKey: 'show_id'
});

Review.belongsTo(Show, {
  foreignKey: "show_id"
});

Review.belongsToMany(Show, {
  through: Rating,
  as: 'show_ratings',
  foreignKey: 'review_id',
  onDelete: 'SET NULL'
});

Show.belongsToMany(Review, {
  through: Rating,
  as: 'show_ratings',
  foreignKey: 'show_id',
  onDelete: 'SET NULL'
});

Rating.belongsTo(Review, {
  foreignKey: 'review_id'
});

Rating.belongsTo(Show, {
  foreignKey: 'show_id'
});


module.exports = { User, Show, Review, Rating, Vote };