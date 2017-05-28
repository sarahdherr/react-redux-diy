'use strict'

const router = require('express').Router()

router.use('/kittens', require('./kittens')) // matches all requests to `/api/users`
      // .use('/users', require('./users')) // matches all requires to `/api/kittens`
      .use(function(req, res, next) {
        const err = new Error('Not found.')
        err.status = 404
        next(err)
      })

module.exports = router
