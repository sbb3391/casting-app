const CastingRole = require('../models/CastingRole');
const Role = require('../models/Role')
const Casting = require('../models/Casting')

const getCastingRoles = async (req, res) => {
    const castingRoles = await CastingRole
        .find({ castingId: req.params.casting })
        .populate({
            path: 'casting',
            populate: {
                path: 'castingRoles',
                model: 'CastingRole',
                populate: {
                    path: 'role',
                    model: 'Role'
                }
            }
        })

    res.status(200).send(castingRoles)
}

const createCastingRole = async (req, res) => {

    const { role, casting, gender, description } = req.body

    // pushes new castingRoleId to castingRoles array for both roles and castings
    const castingRole = await CastingRole.create({ casting, role, gender, description}).then(t => t.populate({
            path: 'casting',
            populate: {
                path: 'castingRoles',
                model: 'CastingRole',
                populate: {
                    path: 'role',
                    model: 'Role'
                }
            }
        })
        .populate('role')
        .execPopulate()
    )
    
    console.log(castingRole)

    const pushRole = await Role.findOne({ _id: role })
    const pushCasting = await Casting.findOne({ _id: casting })
    pushRole.castingRoles.push(castingRole)
    pushRole.save();
    pushCasting.castingRoles.push(castingRole)
    pushCasting.save();
 

    res.status(200).json({castingRole})

}

const getCastingRole = async (req, res) => {
    const castingRole = await CastingRole.findOne({ _id: req.params.castingRoleId}).populate('casting')
        .populate('role')
        .populate('castingRoleQuestions')

    res.status(200).json(castingRole)
}

const deleteAllCastingRoles = async (req, res) => {
    const allCastingRoles = await CastingRole.deleteMany({});

    const emptyCastingRoles = await CastingRole.find({});

    res.status(200).json(emptyCastingRoles)
}

const deleteCastingRole = async (req, res) => {

    

    const { castingRoleId } = req.params
    try {
        const deleted = await CastingRole.findOneAndDelete({ _id: castingRoleId });
        console.log('deleted',deleted)

        const { role, casting } = deleted
        const crId = deleted._id

        const pushRole = await Role.findOne({ _id: role })

        pushRole.castingRoles.remove(crId);
        pushRole.save();
        
        const pushCasting = await Casting.findOne({ _id: casting })
       
        pushCasting.castingRoles.remove(crId);
        pushCasting.save();

        res.status(200).json(deleted);
    } catch(err) {
        console.log(err)
    }
 
}

module.exports = {
    getCastingRole,
    getCastingRoles,
    createCastingRole,
    deleteAllCastingRoles,
    deleteCastingRole
}