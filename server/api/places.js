const express = require('express');
const router = express.Router();
const Place = require('../models/placesModel');
router.get('/test', (req, res) => {
    return res.send(req.body);
})
//get all places
router.get('/', (req, res) => {
    Place.find()
        .then(places => res.status(200).json(places))
        .catch(err => res.status(404).json({ err: "No places found !!!" }));
})
//get single place
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    Place.findById(id)
        .then(place => res.status(200).json(place))
        .catch(err => res.status(404).json({ err: "Can't find this place :<" }));
})
//add new place
router.post('/create-new-place', (req, res) => {
    Place.create(req.body)
        .then(place => res.status(200).json({ msg: "Place added successfully <3" }))
        .catch(err => res.status(400).json({ err: "Can't add this place :<" }));
})
//update place existing
router.post('/update-place/:id', (req, res) => {
    Place.updateOne({ _id: req.params.id }, { $set: { title: req.body.title, description: req.body.description, rating: req.body.rating } })
        .then(place => res.status(200).json({ msg: "Update successfully !" }))
        .catch(err => res.status(400).json({ err: "Can't update this :<" }));
})
//drop place
router.post('/drop-this-place/:id', (req, res) => {
    Place.findByIdAndDelete(req.params.id)
        .then(place => res.status(200).json({ msg: "Deleted Successfully <3" }))
        .catch(err => res.status(400).json({ err: "Can't delete this :<" }));
});
module.exports = router;