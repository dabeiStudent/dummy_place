require('dotenv').config();
const jwt = require('jsonwebtoken');
const Place = require('../models/placesModel');

const getAllPlaces = (req, res) => {
    Place.find()
        .then(places => { return res.status(200).json(places) })
        .catch(err => { return res.status(404).json({ err: "No places found !!!" }) });
}

const getOnePlace = (req, res) => {
    const id = req.params.id;
    Place.findById(id)
        .then(place => { return res.status(200).json(place) })
        .catch(err => { return res.status(404).json({ err: "Can't find this place :<" }) });
}

const addPlace = (req, res) => {
    Place.create(req.body)
        .then(place => res.status(200).json({ msg: "Place added successfully <3" }))
        .catch(err => res.status(400).json({ err: "Can't add this place :<" }));
}

const editPlace = (req, res) => {
    const token = req.cookies["token"];
    const readToken = jwt.verify(token, process.env.JWT_KEY);
    if (readToken && readToken.isAdmin) {
        try {
            Place.updateOne({ _id: req.params.id }, { $set: { title: req.body.title, description: req.body.description, rating: req.body.rating } })
                .then(place => res.status(200).json({ msg: "Update successfully !" }))
                .catch(err => res.status(400).json({ err: "Can't update this :<" }));
        } catch {
            err => {
                return res.status(400).json({ err: 'Something wrong' });
            }
        }
    } else {
        return res.status(401).json({ err: 'Not ADMIN' });
    }
}

const dropPlace = (req, res) => {
    const token = req.cookies["token"];
    const readToken = jwt.verify(token, process.env.JWT_KEY);
    if (readToken && readToken.isAdmin) {
        try {
            Place.findByIdAndDelete(req.params.id)
                .then(place => res.status(200).json({ msg: "Deleted Successfully <3" }))
                .catch(err => res.status(400).json({ err: "Can't delete this :<" }));
        } catch {
            err => {
                return res.status(400).json({ err: 'Something wrong' });
            }
        }
    } else {
        return res.status(401).json({ err: 'Not ADMIN' });
    }
}
module.exports = { getAllPlaces, getOnePlace, addPlace, editPlace, dropPlace };