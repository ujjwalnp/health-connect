const router = require('express').Router()
const authController = require('../controllers/auth')

router
    .post('/addAdmin', authController.addAdmin)
    .post('/login', authController.login)

exports.router = router