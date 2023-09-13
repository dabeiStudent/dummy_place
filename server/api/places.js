require('dotenv').config();
const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser')
router.use(cookieParser());

//placeController
const placeController = require('../controller/placesController');
//middleware
const JWTAuthenticate = require('../middleware/checkJWT');

//get all places
router.get('/', placeController.getAllPlaces);

//get single place
router.get('/:id', placeController.getOnePlace);

//add new place
router.post('/create-new-place', JWTAuthenticate.checkJWT, placeController.addPlace);

//update place existing
router.post('/update-place/:id', JWTAuthenticate.checkJWT, placeController.editPlace);

//drop place
router.post('/drop-this-place/:id', JWTAuthenticate.checkJWT, placeController.dropPlace);

module.exports = router;