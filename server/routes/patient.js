const router = require('express').Router()
const patientController = require('../controllers/patient')
const { verifyToken } = require('../middlewares/auth')

router
    .patch('/updateMedicalHistory/:medicalId', verifyToken, patientController.updateMedicalHistory)
    .patch('/updatePatient/:medicalId', verifyToken, patientController.updatePatient)

exports.router = router