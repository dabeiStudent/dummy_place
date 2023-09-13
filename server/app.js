require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const routerPlace = require('./api/places');
const routerChat = require('./api/chats');
const routerUser = require('./api/users');
const bodyParser = require('body-parser');
const connect2DB = require('./config/db');

//some setting for client to achieve and send data
const cors = require('cors');
app.use(cors({ origin: true, credentials: true }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    next();
})
//bodyparser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
//routing
// app.use('/', (req, res) => {
//     res.render('hello.ejs');
// })
app.use('/', routerPlace);
app.use('/user', routerUser);
app.use('/chat', routerChat);

//server
const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
    console.log(`Server is now running on PORT: ${PORT}`);
})
//database
connect2DB();
//generate default places
//const seedPlaces = require('./config/seed');

