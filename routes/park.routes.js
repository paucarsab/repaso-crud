const express = require('express')
const router = express.Router()
const Park = require('../models/park.model')

// Aquí los endpoints

//Crea la ruta: http://localhost:3000/parks/newpark
router.get('/new', (req, res, next) => {
    res.render('parks/new-park.hbs');
})

router.get('/', (req, res, next) => {
    Park.find()
        .then((allParks) => {
            res.render('parks/parks-index', { Park: allParks })
        }).catch((err) => {
            console.log("espabilaaa")
        })
})

router.post('/', (req, res, next) => {
    Park.create(req.body)
        .then(() => res.redirect('/parks'))
        .catch(err => console.log(err))
});

module.exports = router