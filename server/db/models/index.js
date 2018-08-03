const User = require('./user');
const Article = require('./article');
const Plan = require('./plan');
const Comment = require('./comment');

Article.belongsTo(User);
User.hasMany(Article);

Comment.belongsTo(Article);
Article.hasMany(Comment);

Comment.belongsTo(Plan);
Plan.hasMany(Comment);

User.hasMany(Plan);
Plan.belongsTo(User);

module.exports = {
  User,
  Article,
  Comment,
  Plan,
};
