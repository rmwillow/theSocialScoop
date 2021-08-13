const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Show model
class Show extends Model {}

// create fields/columns for Show model
Show.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overview: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    poster_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    season_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    episode_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // add rating value HERE once rating model has been built

    // year? or last air date? 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "show",
  }
);

module.exports = Show;