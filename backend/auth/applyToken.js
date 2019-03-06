const jwt = require('jsonwebtoken')
const Config = require('../config.js')

module.exports = {
    getToken
}

function getToken(user) {
    const token = jwt.sign({
        sub: user.id
    }, Config.JWT_SECRET)
    return token
}