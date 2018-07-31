const Sequelize = require('sequelize');
const db = require('../db');

const Comment = db.define('comment', {
  comment: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  authorName: {
    type: Sequelize.STRING,
  },
});

module.exports = Comment;
