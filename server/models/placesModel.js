const mongoose = require('mongoose');

const PlacesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true
    }
});

const Place = mongoose.model('place', PlacesSchema);
module.exports = Place;