const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide a first name'],
        minLength: 3,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: [true, 'Please provide a name'],
        minLength: 3,
        maxLength: 30
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        minLength: 3,
        maxLength: 30,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email'
        ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: 6
    },
    applications: [],
    guardianName: {
        type: String,
    },
    guardianPhone: {
        type: String,
    },
    guardianEmail: {
        type: String,
    },
    personalLinks: {
        
    },
    dateOfBirth: {

    },
    address: {

    },
    city: {

    },
    state: {

    },
    zipCode: {

    },
    gender: {

    },
    pronouns: {

    },
    height: {

    },
    weight: {

    },
    topSize: {

    },
    bottomSize: {

    },
    race: {

    },
    activities: {

    },
    photos: {

    },
    videos: {

    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application'
        }
    ]
}, {timestamps: true});

UserSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function() {
    return jwt.sign({userId: this._id, name: this.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}

UserSchema.methods.comparePassword = async function(canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password)
    return isMatch
}

module.exports = mongoose.model('User', UserSchema)