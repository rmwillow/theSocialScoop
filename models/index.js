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

User.belongsToMany(Review, {
  through: Vote,
  as: 'voted_reviews',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Show.hasMany(Rating, {
  foreignKey: 'show_id'
});

Review.belongsTo(User, {
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
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Vote.belongsTo(Review, {
  foreignKey: 'review_id',
  onDelete: 'SET NULL'
});

Review.hasMany(Vote, {
  foreignKey: 'review_id'
});

Rating.belongsTo(User, {
  through: User,
  foreignKey: 'user_id',
});

Rating.belongsToMany(Show, {
  through: Show,
  foreignKey: 'show_id',
});



// User.hasMany(Rating, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });



module.exports = { User, Show, Review, Rating, Vote };
