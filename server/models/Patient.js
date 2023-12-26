const mongoose = require('mongoose')
const Schema = mongoose.Schema

const medicalHistorySchema  = new Schema({
    medicalId: {
        type: String,
        required: true,
        ref: 'Paitient',
    },
    name: {
        type: String,
        required: true,
    },
    potency: {
        type: Number,
        required: true,
    },
    frequency: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    signature: {
        doctorId: {
            type: String,
            required: true,
            ref: 'Staff',
        },
        name: {
            type: String,
            required: true,
        },
        licenseNo: {
            type: Number,
            required: true,
        },
    }
},
    {timestamps: true}
)

const PatientSchema = new Schema({
    role: {
        type: String,
        required: true
    },
    medicalId: {
        type: String,
        required: true,
        unique: true
    },
    nationalId: {
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
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    
    },
    contact: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true,
    },
    medicalHistory: [medicalHistorySchema],
},
{
    timestamps: true
})

const Patient = mongoose.model('Patient', PatientSchema)

module.exports = Patient