const Patient = require('../models/Patient')
const Staff = require('../models/Staff')

exports.updateMedicalHistory = async (req, res) => {
    if (req.userRole !== 'doctor') {
        return res.status(403).json({ message: 'Forbidden: Access denied for this role' })
    }

    const { medicalId } = req.params
    const { doctorId, name, potency, frequency, quantity, status } = req.body
    
    try {
        const doctor = await Staff.findOne({ staffId: doctorId })
        const medicalHistory = {
            medicalId: medicalId,
            name: name,
            potency: potency,
            frequency: frequency,
            quantity: quantity,
            status: status,
            signature: {
                doctorId: doctor.staffId,
                name: doctor.name,
                licenseNo: doctor.licenseNo,
            }
        }
        const patient = await Patient.findOne({ medicalId: medicalId })
        patient.medicalHistory.push(medicalHistory)
        await patient.save()
        res.status(200).json({ message: 'Medical history updated successfully', patient: patient })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.updatePatient = async (req, res) => {
    if (req.userRole !== 'doctor') {
        return res.status(403).json({ message: 'Forbidden: Access denied for this role' })
    }

    const { medicalId } = req.params
    const { name, gender, age, address, bloodGroup, contact, height, weight } = req.body

    try {
        const patient = await Patient.findOne({ medicalId: medicalId })

        if (name && name.trim() !== '') {
            patient.name = name
        }
        if (gender && gender.trim() !== '') {
            patient.gender = gender
        }
        if (age && age.trim() !== '') {
            patient.age = age
        }
        if (address && address.trim() !== '') {
            patient.address = address
        }
        if (bloodGroup && bloodGroup.trim() !== '') {
            patient.bloodGroup = bloodGroup
        }
        if (contact && contact.trim() !== '') {
            patient.contact = contact
        }
        if (height && height.trim() !== '') {
            patient.height = height
        }
        if (weight && weight.trim() !== '') {
            patient.weight = weight
        }

        await patient.save()
        res.status(200).json({ message: 'Patient updated successfully', patient: patient })
        
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}