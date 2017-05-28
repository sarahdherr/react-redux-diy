// `/api/kittens`
const router = require('express').Router()

// matches GET requests to `/api/kittens`
router.get('/', function(req, res, next) {
  // something happens here to get all kittens
})

// matches POST requests to `/api/kittens`
router.post('/', function(req, res, next) {
  // something happens here to create a new kitten
})

// matches PUT requests to `/api/kittens/:kittenId`
router.put('/:kittenId', function(req, res, next) {
  // something happens here to update a kitten w/ kittenId
})

// matches DELETE requests to `/api/kittens/:kittenId`
router.delete('/:kittenId', function(req, res, next) {
  // something happens here to delete a kitten w/ kittenId
})

module.exports = router
