// `/api/kittens`
const router = require('express').Router()
const Kitten = require('../../db/models').Kitten

// matches GET requests to `/api/kittens`
router.get('/', function (req, res, next) {
  // something happens here to get all kittens
  Kitten.findAll()
    .then(kittens => res.send(kittens))
    .catch(next)
})

// matches GET requests to `/api/kittens/:kittenId`
router.get('/:kittenId', function (req, res, next) {
  // something happens here to get a specific kitten
  Kitten.findById(req.params.kittenId)
    .then(kitten => res.send(kitten))
    .catch(next)
})

// matches POST requests to `/api/kittens`
router.post('/', function (req, res, next) {
  // something happens here to create a new kitten
  Kitten.create(req.body)
    .then(newKitten => res.send(newKitten))
    .catch(next)
})

// matches PUT requests to `/api/kittens/:kittenId`
router.put('/:kittenId', function (req, res, next) {
  // something happens here to update a kitten w/ kittenId
  Kitten.update(
    req.body,
    {returning: true, where: req.params.kittenId}
  )
    .then(([_, [updatedKitten]]) => res.json(updatedKitten))
    .catch(next)
})

// matches DELETE requests to `/api/kittens/:kittenId`
router.delete('/:kittenId', function (req, res, next) {
  // something happens here to delete a kitten w/ kittenId
})

module.exports = router
