const express = require('express')
const userRoutes = express.Router()
const VerifyUser = require('../auth/verifyUser').authenticate
const isValidPassword = require('../auth/verifyUser').isValidPassword
userRoutes.post('/login', authenticate)

module.exports = userRoutes

async function authenticate(req, res, next) {
    const user = await VerifyUser(req.body)
    if (user) {
        res.json(user)
    } else {
        res.status(400).json({
            message: 'Username or password is incorrect'
        })
    }
}

module.exports = userRoutes