const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/Appy')

require('./models')

const syncedDbPromise = db.sync()

syncedDbPromise
  .then(function() {
    console.log('Sequelize models synced to PostgresSQL')
  })
  .catch(err => console.error(err))

module.exports = syncedDbPromise
