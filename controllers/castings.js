const Casting = require('../models/Casting');
const Role = require('../models/Role');
const _ = require('underscore');

const getCastings = async (req, res) => {
    const castings = await Casting
        .find()
        .populate({
            path: 'castingRoles',
            populate: {
                path: 'role',
                model: 'Role',
            }
        })

res.status(200).json(castings)
}

const createCasting= async (req, res) => {
    try {
        const casting = await Casting.create(req.body)
        
        res.status(200).json(casting)
    } catch(err) {
        console.log(err)

        res.status(404).send({err: err})
    }
}

const getCasting = async (req, res) => {
    const casting = await Casting
        .findOne({ _id: req.params.castingId})
        .populate("castingQuestions")
        .populate({
            path: 'castingRoles',
            populate: {
                path: 'role',
                model: 'Role',
            }
        })

    res.status(200).json(casting)
}

const addCastingQuestionToCasting = async (req, res) => {
    const { castingId, castingQuestionId } = req.body

    const casting = await Casting.find({ _id: castingId });

    casting.castingQuestions.push(castingQuestionId)
    casting.save();

    res.status(200).json(casting);
}

const updateCasting = async (req, res) => {
    try {
        const casting = await Casting.findOne({_id: req.params.castingId})
        .populate("castingQuestions")
        .populate({
            path: 'castingRoles',
            populate: {
                path: 'role',
                model: 'Role',
            }
        })

        const updateKeys = Object.keys(req.body)

        updateKeys.forEach( key => {
            console.log(casting[key]);
            console.log(_.isEqual(casting[key] === req.body[key]));
            casting[key] = req.body[key]
        })

        casting.save();
        res.status(200).json(casting)
    } catch(err) {
        res.status(400).send(err)

    }
}

const removeCastingRoleReferences = async (req, res) => {
    const casting = await Casting
        .findOne({ _id: req.params.castingId})

    casting.castingRoles = [];
    casting.save();

    res.status(200).json({ castingRoles: casting.castingRoles})
}

module.exports = {
    getCastings,
    createCasting,
    getCasting,
    updateCasting,
    addCastingQuestionToCasting,
    removeCastingRoleReferences
}