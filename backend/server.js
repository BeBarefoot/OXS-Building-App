const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Config = require('./config.js')
const tenentRoute = require('./routes/tenent.route')
const userRoute = require('./routes/user.route')
const verifyToken = require('./auth/verifyToken')

mongoose.connect(Config.MongoDB, { useNewUrlParser: true })
    .then(() =>
        console.log('Database is connected'),
        err => console.log('Can not connect to the database' + err)
    )

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/user', userRoute)

app.use('/tenents', verifyToken, tenentRoute)

app.listen(Config.PORT)