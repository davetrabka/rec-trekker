const Sequelize = require('sequelize');
const db = require('../db');

const Article = db.define('article', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preview: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Article;

Article.beforeValidate(article => {
  article.preview = article.content.slice(0, 300) + '...';
});
