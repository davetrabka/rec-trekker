const Sequelize = require('sequelize');
const db = require('../db');

const Plan = db.define('plan', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  public: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  shortDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  longDescription: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  UUID: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    unique: true,
  },
});

module.exports = Plan;
