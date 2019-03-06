const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Post = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    debt: {
        type: String
    }
}, {
    collection: 'tenent'
})

module.exports = mongoose.model('Post', Post)