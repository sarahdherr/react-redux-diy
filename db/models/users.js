'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('users', {
  name: Sequelize.STRING,
  age: Sequelize.STRING
})
