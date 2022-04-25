const Role = require('../models/Role');

const getRoles = async (req, res) => {
    const roles = await Role.find({});

    res.status(200).json(roles);
}

const createRole = async (req, res) => {
    const { name, roleImageUrl } = req.body

    const role = await Role.create({name, roleImageUrl })

    res.status(200).json({role})
}

const removeCastingRoleRefs = async (req, res) => {
    const roles = await Role.find({});

    roles.forEach( r => {
        r.castingRoles = []
        r.save()
    });

    res.status(200).json({"msg": roles})
}

module.exports = {
    getRoles,
    createRole,
    removeCastingRoleRefs
}