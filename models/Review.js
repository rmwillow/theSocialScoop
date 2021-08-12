const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      review_id: body.review_id,
    }).then(() => {
      return Review.findOne({
        where: {
          id: body.review_id,
        },
        attributes: [
          "id",
          "review_text",
          "date_created",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM vote WHERE review.id = vote.review_id)"
            ),
            "vote_count",
          ],
        ],
        include: [
          {
            model: models.User,
            attributes: ["username"],
          }
            ],
      });
    });
  }
}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    show_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "show",
        key: "id",
      },
    },
    date_watched: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = Review;
