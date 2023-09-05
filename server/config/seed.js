const Place = require('../models/placesModel');

const place1 = new Place({
    title: "Anor Londo",
    description: "Castle",
    rating: 10
});
place1.save();
const place2 = new Place({
    title: "Keep Ruin",
    description: "Swamp",
    rating: 1
});
place2.save();
const place3 = new Place({
    title: "Grand Archive",
    description: "Castle",
    rating: 7
});
place3.save();

module.exports = { place1, place2, place3 };