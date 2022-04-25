// const { string } = require('joi')
const mongoose = require('mongoose')

const CastingRoleSchema = new mongoose.Schema({
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    casting: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Casting',
        required: true
    },
    gender: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    castingRoleQuestions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        }
    ]
})

module.exports = mongoose.model('CastingRole', CastingRoleSchema)