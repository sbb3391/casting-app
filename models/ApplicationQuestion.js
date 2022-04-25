const mongoose = require('mongoose')

const ApplicationQuestionSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    application: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    response: {
        responseString: String,
        responseBoolean: Boolean,
        responseNumber: Number
    }
}, {timestamps: true});

module.exports = mongoose.model('ApplicationQuestion', ApplicationQuestionSchema)