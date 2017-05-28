const startDB = require('./db')

startDB
  .then(() => require('./server'))
  .catch(err => console.error(err))
