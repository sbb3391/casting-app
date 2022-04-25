const mongoose = require('mongoose')

const ApplicationRoleQuestionSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    applicationRole: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ApplicationRole'
    },
    response: {
        responseString: String,
        responseBoolean: Boolean,
        responseNumber: Number
    }
}, {timestamps: true});

module.exports = mongoose.model('ApplicationQuestion', ApplicationQuestionSchema)