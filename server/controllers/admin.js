const bcrypt = require('bcrypt')

const Staff = require('../models/Staff')
const Patient = require('../models/Patient')
const Hospital = require('../models/Hospital')

/* CREATE */
exports.addStaff = async (req, res) => {
    const { hospitalId, type, licenseNo, nationalId, name, password, gender, age, address, contact } = req.body

    try {
        const hospital = await Hospital.findById(hospitalId)
        const assignedHospital = hospital.name
        const hashedPassword = await bcrypt.hash(password, 10)
        const newStaff = new Staff({
            type: type,
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
            staffType: type,
        }
        hospital.assignedStaff.push(newStaff)
        await hospital.save()

        res.status(201).json({ staff: newStaff })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.addPatient = async (req, res) => {
    
}


 