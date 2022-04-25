const Question = require('../models/Question');
const Casting = require('../models/Casting');
const CastingRole = require('../models/CastingRole')

const getQuestions = async (req, res) => {
    const questions = await Question.find({})

    res.status(200).json({questions})
}

const createCastingQuestion = async (req, res) => {
    try {
        const { text, questionType } = req.body
        const { castingId } = req.params
    
        const question = await Question.create({ text, questionType })
    
        const casting = await Casting.findOne({_id: castingId})
    
        casting.castingQuestions.push(question._id)
        casting.save();
        
        
        res.status(200).json({question})
    } catch(err) {
        console.log(err)
        res.status(400).json({msg: err})
    }
}

const createCastingRoleQuestion = async (req, res) => {
    try {
        const { text, questionType } = req.body
        const { castingRoleId } = req.params
    
        const question = await Question.create({ text, questionType })
    
        const castingRole = await CastingRole.findOne({_id: castingRoleId})
    
        castingRole.castingRoleQuestions.push(question._id)
        castingRole.save();
        
        
        res.status(200).json({question})
    } catch(err) {
        console.log(err)
        res.status(400).json({msg: err})
    }
}

module.exports = {
    createCastingQuestion,
    createCastingRoleQuestion,
    getQuestions
}