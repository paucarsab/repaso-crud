const express = require('express')
const router = express.Router()
const Coaster = require('../models/coaster.model')
const Park = require('../models/park.model')

// Aquí los endpoints

router.get('/new', (req, res, next) => {
    Park.find()
        .then((allParks) => {
            res.render('coasters/new-coaster', { allParks });
        }).catch((err) => {
            console.log("espabilaaa")
        })
})


router.get('/', (req, res, next) => {
    Coaster.find()
        .populate("park")
        .then((allCoasters) => {
            res.render('coasters/coasters-index.hbs', { Coaster: allCoasters })
        }).catch((err) => {
            console.log("espabilaaa")
        })
})

router.post('/', (req, res, next) => {
    Coaster.create(req.body)
        .then(() => res.redirect('/Coasters'))
        .catch(err => console.log(err))
});

router.get('/coasters/:id', (req, res, next) => {
    Coaster.findById(req.params.id).then(oneCoaster => {
        res.render('Coaster/coaster-details', oneCoaster)
    });
});


module.exports = router