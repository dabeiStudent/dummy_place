require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const router = require('./api/places');
const bodyParser = require('body-parser');
const connect2DB = require('./config/db');
const cors = require('cors');
app.use(cors({ origin: true, credentials: true }));
//bodyparser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
//routing
app.use('/', router);
//server
const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
    console.log(`Server is now running on PORT: ${PORT}`);
})
//database
connect2DB();
//generate default places
//const seedPlaces = require('./config/seed');
