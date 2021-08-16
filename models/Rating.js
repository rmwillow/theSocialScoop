const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
        
      },
      // user_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'user',
      //     key: 'id'
      //   }
      // },
      show_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'show',
          key: 'id'
        }
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: 1,
            max: 5
          },
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: "rating",
    }
  );


module.exports = Rating;