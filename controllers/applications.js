const Application = require('../models/Application');
const Question = require('../models/Question')
const ApplicationQuestion = require('../models/ApplicationQuestion')

const getApplications = async (req, res) => {
    const applications = await Application
        .findById('623b967fab7e386d7132abfe')
        .populate('applicationQuestions')

    res.status(200).json(applications)
}

const createApplication = async (req, res) => {
    const { user, castingRole } = req.body

    const application = await Application.create({ user, castingRole })

    const questions = await Question.find({})

    questions.forEach( q => {
        application.applicationQuestions.push(q._id)
    })

    application.save()

    res.status(200).json(application)
}


module.exports = {
    getApplications,
    createApplication
}