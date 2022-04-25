const CastingQuestion = require('../models/CastingQuestion');

const getCastingQuestions = async (req, res) => {
    const castingQuestions = await CastingQuestion.find()
    
    res.status(200).send(castingQuestions)
}

const createCastingQuestions = async (req, res) => {
    const { text, responseType} = req.body

    const castingQuestion = await CastingQuestion.create({ text, responseType})
    
    res.status(200).json(castingQuestion)
}

module.exports = {
    getCastingQuestions,
    createCastingQuestions
}