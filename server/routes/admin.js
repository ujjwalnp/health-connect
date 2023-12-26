const router = require('express').Router()
const adminController = require('../controllers/admin')
const { verifyToken } = require('../middlewares/auth')

router
    /* CREATE */
    .post('/addStaff', verifyToken, adminController.addStaff)
    .post('/addPatient', verifyToken, adminController.addPatient)
    .post('/addPharmacist', verifyToken, adminController.addPharmacist)
    
    /* READ */

    /* UPDATE */

    /* DELETE */

exports.router = router