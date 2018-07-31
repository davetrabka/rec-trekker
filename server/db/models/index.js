const User = require('./user');
const Article = require('./article');
const Group = require('./group');
const Comment = require('./comment');

Article.belongsTo(User);
User.hasMany(Article);

Comment.belongsTo(Article);
Article.hasMany(Comment);

User.belongsToMany(Group, { through: 'groupMemberships' });
Group.belongsToMany(User, { through: 'groupMemberships' });

module.exports = {
  User,
  Article,
  Comment,
  Group,
};
