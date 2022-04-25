const mongoose = require('mongoose')

const RoleQuestionSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    response: {
        responseString: String,
        responseBoolean: Boolean,
        responseNumber: Number
    }
}, {timestamps: true});

module.exports = mongoose.model('RoleQuestion', RoleQuestionSchema)