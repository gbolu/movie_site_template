const mongoose = require('mongoose')
const passportLocalStrategy = require('passport-local-mongoose')

const userSchema = mongoose.Schema({
    username: String,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: String
})

userSchema.plugin(passportLocalStrategy)

module.exports = mongoose.model('user', userSchema)