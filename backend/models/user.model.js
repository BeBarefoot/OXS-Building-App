const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

let User = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
})

User.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(this.password, salt)
        this.password = passwordHash
        next()
    } catch (err) {
        next(err)
    }
})

User.methods.isValidPassword = async function({ password }) {
    try {
        const isValid = await bcrypt.compare(password, this.password)
        return isValid
    } catch (err) {
        console.log("error");
        next()
    }
}

module.exports = mongoose.model('User', User)