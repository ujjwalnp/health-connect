const router = require('express').Router()
const adminController = require('../controllers/admin')
const verifyToken = require('../middlewares/verifyToken')

router
    /* CREATE */
    .post('/addAdmin', adminController.addAdmin)
    .post('/addStaff', verifyToken, adminController.addStaff)
    
    /* READ */

    /* UPDATE */

    /* DELETE */

exports.router = router