const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
    role: {
        type: String,
        required: true
    },
    staffId: {
        type: String,
        required: true,
        unique: true
    },
    licenseNo: {
        type: Number,
        required: true,
        unique: true
    },
    nationalId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
    },
    contact: {
        type: Number,
    },
    assignedHospital: {
        type: String,
    },
},
{
    timestamps: true
})

const Staff = mongoose.model('Staff', staffSchema)

module.exports = Staff