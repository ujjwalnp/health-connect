const bcrypt = require('bcrypt')

const Staff = require('../models/Staff')
const Patient = require('../models/Patient')
const Hospital = require('../models/Hospital')

const generateId = (role) => {
    const randomDigits = Math.floor(10000 + Math.random() * 90000)
    if (role === 'doctor') {
        return `D${randomDigits}`
    } else if (role === 'labAssistant') {
        return `L${randomDigits}`
    } else if (role === 'pharmacist') {
        return `M${randomDigits}`
    } else if (role === 'paitient') {
        return `P${randomDigits}`
    } else if (role === 'hospital') {
        return `H${randomDigits}`
    }
  }

/* CREATE */
exports.addStaff = async (req, res) => {
    if (req.userRole !== 'hospital') {
        return res.status(403).json({ message: 'Forbidden: Access denied for this role' })
    }
    const { role, hospitalId, licenseNo, nationalId, name, password, gender, age, address, contact } = req.body

    try {
        const staffId = generateId(role)
        const hospital = await Hospital.findOne({ hospitalId: hospitalId })
        const assignedHospital = hospital.name
        const hashedPassword = await bcrypt.hash(password, 10)
        const newStaff = new Staff({
            role: role,
            staffId: staffId,
            licenseNo: licenseNo,
            nationalId: nationalId,
            name: name,
            password: hashedPassword,
            gender: gender,
            age: age,
            address: address,
            contact: contact,
            assignedHospital: assignedHospital,
        })

        await newStaff.save()
        const savedStaffId = await Staff.findOne({ nationalId: nationalId }).select('_id')
        const newAssignedStaff = {
            hospitalId: hospitalId,
            staffId: savedStaffId,
            staffType: role,
        }
        hospital.assignedStaff.push(newAssignedStaff)
        await hospital.save()

        res.status(201).json({ staff: newAssignedStaff })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.addPatient = async (req, res) => {
    if (req.userRole !== 'hospital') {
        return res.status(403).json({ message: 'Forbidden: Access denied for this role' })
    }
    const { role, nationalId, name, password, gender, age, address, bloodGroup, contact, height, weight } = req.body

    try {
        const medicalId = generateId(role)

        const hashedPassword = await bcrypt.hash(password, 10)
        const newPaitient = new Patient({
            role: role,
            medicalId: medicalId,
            nationalId: nationalId,
            name: name,
            password: hashedPassword,
            gender: gender,
            age: age,
            address: address,
            bloodGroup: bloodGroup,
            contact: contact,
            height: height,
            weight: weight,
            medicalHistory: [],
        })

        await newPaitient.save()
        res.status(201).json({ patient: newPaitient })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.addPharmacist = async (req, res) => {
    if (req.userRole !== 'hospital') {
        return res.status(403).json({ message: 'Forbidden: Access denied for this role' })
    }
    const { role, registrationNo, name, password, address, contact } = req.body

    try {
        const hospitalId = generateId(role)
        const newPharmacist = new Hospital({
            role: role,
            hospitalId: hospitalId,
            registrationNo: registrationNo,
            name: name,
            password: password,
            address: address,
            contact: contact,
        })

        await newPharmacist.save()
        res.status(201).json({ pharmacist: newPharmacist })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
 