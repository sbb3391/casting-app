const { string } = require('joi')
const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    castingRoles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CastingRole'
        }
    ],
    roleImageUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Role', RoleSchema)