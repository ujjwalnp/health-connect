const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

const Staff = require('../models/Staff')
const Patient = require('../models/Patient')
const Hospital = require('../models/Hospital')

/* CREATE */
exports.addAdmin = async (req, res) => {
    const type = 'hospital'
    const { hospitalId, registrationNo, name, password, address, contact } = req.body

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const newAdmin = new Hospital({
            hospitalId: hospitalId,
            type: type,
            registrationNo: registrationNo,
            name: name,
            password: hashedPassword,
            address: address,
            contact: contact,
            assignedStaff: [],
        })

        await newAdmin.save()

        res.status(201).json({ admin: newAdmin })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.login = async (req, res) => {
    const { id, password } = req.body

    let collection
    try {
        if (id.startsWith('H') || id.startsWith('M')) {
            collection = await Hospital.findOne({ hospitalId: id })
        }
        else if (id.startsWith('P')) {
            collection = await Paitient.findOne({ medicalId: id })
        }
        else if (id.startsWith('D') || id.startsWith('L')) {
            collection = await Staff.findOne({ staffId: id })
        } else {
            return res.status(400).json({ message: 'Invalid ID format' })
        }

        if (collection == null) {
            return res.status(400).json({ message: 'Cannot find user' })
        }

        if (await bcrypt.compare(password, collection.password)) {
            const accessToken = jsonwebtoken.sign({ id: collection._id, role: collection.role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7' })
            res.status(200).json({ accessToken: accessToken, role: collection.role })
        } else {
            res.status(400).json({ message: 'Invalid password' })
        }

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}