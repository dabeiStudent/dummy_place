const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        unique: true,
        require: true
    },
    passWord: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true
    }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;