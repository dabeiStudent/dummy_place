require('dotenv').config();
const express = require('express');
const router = express.Router();

const userAuthenticate = require('../controller/authenticateUser');
const JWTAuthenticate = require('../middleware/checkJWT');
router.post('/new-user', userAuthenticate.userRegister);

router.post('/user-login', userAuthenticate.userLogin);

router.post('/user-logout', JWTAuthenticate.checkJWT, userAuthenticate.userLogout);

module.exports = router