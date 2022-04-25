const mongoose = require('mongoose')

const CastingQuestionSchema = new mongoose.Schema({
    text: String,
    questionType: String
})

module.exports = mongoose.model('CastingQuestion', CastingQuestionSchema)