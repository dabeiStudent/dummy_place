require('dotenv').config();
const mongoose = require('mongoose');
const db = process.env.mongodb_uri;

const connect2DB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(db, {
            useNewUrlParser: true
        });
        console.log("MongoDB is connected...");
    } catch (err) {
        console.log(err.message);
        proccess.exit(1);
    }
};

module.exports = connect2DB;