const { string } = require('joi')
const mongoose = require('mongoose')

const CastingSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    castingRoles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CastingRole'
        }
    ],
    castingDescription: {
        type: String
    },
    castingImageUrl: {
        type: String,
        default: 'https://research.musc.edu/-/sm/medicine/departments/phs/i/not-available.ashx?la=en'
    },
    castingQuestions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        }
    ],
    additionalCastingDetails: [String],
    location: {
        type: String
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date
    },
    pay: {
        type: String
    }
})

module.exports = mongoose.model('Casting', CastingSchema)