const Sequelize = require('sequelize');
const db = require('../db');

const Group = db.define('groups', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  public: {
    type: Sequelize.BOOLEAN,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Group;
