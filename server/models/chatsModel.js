const mongoose = require('mongoose');

const ChatSchema = mongoose.Schema({
    uid: {
        type: String
    },
    message: {
        type: String
    },
    time: {
        type: String
    }
});

const Chat = mongoose.model('chat', ChatSchema);
module.exports = Chat;