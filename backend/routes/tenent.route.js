const express = require('express')
const tenentRoutes = express.Router()

let Tenent = require('../models/tenent.model')

//Create new tenent
tenentRoutes.route('/add').post(function(req, res) {
    let tenent = new Tenent(req.body)
    tenent.save()
        .then(() => {
            res.status(200)
        })
        .catch(() => {
            res.status(400)
        })
})

//Get tenents
tenentRoutes.route('/').get(function(req, res) {
    Tenent.find(function(err, tenents) {
        err ? res.json(err) : res.json(tenents)
    })
})

//Edit Tenent
tenentRoutes.route('/edit/:id').get(function(req, res) {
    let id = req.params.id
    Tenent.findById(id, function(err, tenent) {
        (err) ? res.json(err): res.json(tenent)
    })
})

//Update tenent
tenentRoutes.route('/update/:id').post(function(req, res) {
    Tenent.findById(req.params.id, function(err, tenent) {
        if (!tenent)
            res.status(404)
        else {
            tenent.name = req.body.name
            tenent.address = req.body.address
            tenent.phone = req.body.phone
            tenent.debt = req.body.debt
            tenent.save().then(() => {
                    res.json('Update complete')
                })
                .catch(() => {
                    res.status(400)
                })
        }
    })
})

//Remove tenent
tenentRoutes.route('/delete/:id').delete(function(req, res) {
    Tenent.findByIdAndRemove({
        _id: req.params.id
    }, function(err) {
        err ? res.json(err) : res.json('Successfully removed')
    })
})

module.exports = tenentRoutes