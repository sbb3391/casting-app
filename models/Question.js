const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    questionType: { type: String, required: true, enum: ['string', 'textarea', 'boolean', 'number'] }
}, {timestamps: true})

module.exports = mongoose.model('Question', QuestionSchema)