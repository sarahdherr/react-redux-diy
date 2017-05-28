'use strict'

const Sequelize = require('sequelize')

module.exports = db => db.define('kittens', {
  name: Sequelize.STRING,
  age: Sequelize.STRING
})
