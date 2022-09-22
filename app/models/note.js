const Sequelize = require('sequelize');
const db = require('../util/database');

const Note = db.define('note',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Note;