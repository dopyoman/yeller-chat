'use strict';

// channel-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const channel = sequelize.define('channels', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isOpen: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    freezeTableName: true,
    classMethods: {
      associate() {
        channel.hasMany(sequelize.models.users);
      }
    }
  });

  channel.sync();

  return channel;
};
