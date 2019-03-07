const Config = require('../config.js')
const bcrypt = require('bcryptjs')
const MongoClient = require('mongodb').MongoClient
const applyToken = require('./applyToken').getToken
const userModel = require('../models/user.model')

module.exports = { authenticate }

async function authenticate(userData) {
    let newUser = await new userModel(userData)
    newUser.save()
    let { email } = newUser
    let user = await isValidName(email)
    if (user) {
        if (await newUser.isValidPassword(user)) {
            let token = await applyToken(user)
            return token
        } else return
    }
}

async function isValidName(email) {
    const DataBase = await MongoClient.connect(Config.MongoDB, Config.Parser)
    let user = await DataBase.db("oxsapp").collection("user")
        .findOne({ email })
    return user
}