const Sequelize = require('sequelize');
const db = require('../db');

const Article = db.define('article', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
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

const generateSlugAndPreview = article => {
  article.preview = article.content.slice(0, 300) + '...';
  article.slug = article.title
    .replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '')
    .toLowerCase()
    .split(' ')
    .join('-');
};

Article.beforeValidate(generateSlugAndPreview);
Article.beforeUpdate(generateSlugAndPreview);

module.exports = Article;
