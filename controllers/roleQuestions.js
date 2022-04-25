const RoleQuestion = require('../models/RoleQuestion');

const getRoleQuestions = async (req, res) => {
    const roleQuestions = await Question.find({})

    res.status(200).json({roleQuestions})
}

const createRoleQuestion = async (req, res) => {
    const { roleQuestionText, answerType } = req.body

    const roleQuestion = await RoleQuestion.create({ roleQuestionText, answerType })
    
    res.status(200).json({roleQuestion})
}

const getRoleQuestion = async (req, res) => {
    res.status(200).json({msg: 'getRoleQuestions'})
}

const updateRoleQuestion = async (req, res) => {
    res.status(200).json({msg: 'updateRoleQuestion'})
}

const deleteRoleQuestion = async (req, res) => {
    res.status(200).json({msg: 'deleteRoleQuestion'})
}


module.exports = {
    getRoleQuestion,
    createRoleQuestion,
    getRoleQuestions,
    updateRoleQuestion,
    deleteRoleQuestion
}