const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    castingRole: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CastingRole'
    },
    applicationQuestions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ApplicationQuestion'
        }
    ]
}, {timestamps: true});


module.exports = mongoose.model('Application', ApplicationSchema)