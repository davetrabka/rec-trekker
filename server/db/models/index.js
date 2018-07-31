const User = require('./user');
const Article = require('./article');
const Group = require('./group');

Article.belongsTo(User);
User.hasMany(Article);

User.belongsToMany(Group, { through: 'groupMemberships' });
Group.belongsToMany(User, { through: 'groupMemberships' });

module.exports = {
  User,
  Article,
};
