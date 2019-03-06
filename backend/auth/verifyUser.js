const Config = require('../config.js')
const bcrypt = require('bcryptjs')
const MongoClient = require('mongodb').MongoClient
const applyToken = require('./applyToken').getToken
let USER = require('../models/user.model')

module.exports = {
    async authenticate(userData) {
        let newUser = await new USER(userData)
        newUser.save()
        let { email, password } = newUser
        const DataBase = await MongoClient.connect(Config.MongoDB, {
            useNewUrlParser: true
        })
        let user = await DataBase.db("oxsapp").collection("user")
            .findOne({ email, password })
        if (user) {
            //////////////////////////////////////////////////////////
            //TODO - SETUP DECRYPT PASSWORD COMPARE //
            const isPasswordValidated = await bcrypt.compare(password, user.password, async(err, res) => {
                    if (res) { return res } else return err
                })
                //////////////////////////////////////////////////////////
            let token = await applyToken(user)
            return token
        }
    },
}