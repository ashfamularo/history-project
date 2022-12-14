const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.getIndex)
router.get('/exhibits', indexController.getExhibits)
router.get('/collections', indexController.getCollections)
router.get('/events', indexController.getEvents)
router.get('/learn', indexController.getLearn)
router.get('/give', indexController.getGive)
router.get('/about', indexController.getAbout)

module.exports = router