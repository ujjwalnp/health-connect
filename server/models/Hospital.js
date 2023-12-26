const mongoose = require('mongoose')
const Schema = mongoose.Schema

const assignedStaffSchema = new Schema({
    hospitalId: {
        type: String,
        required: true
    },
    staffId: {
        type: String,
        required: true
    },
    staffType: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})

const hospitalSchema = new Schema({
    role: {
        type: String,
        required: true
    },
    hospitalId: {
        type: String,
        required: true,
        unique: true
    },
    registrationNo: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true,
    },
    address: {
        type: String, 
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    assignedStaff: [assignedStaffSchema],
},
{
    timestamps: true
})

const Hospital = mongoose.model('Hospital', hospitalSchema)

module.exports = Hospital