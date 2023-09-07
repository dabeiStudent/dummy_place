const express = require('express');
const router = express.Router();
const Chat = require('../models/chatsModel');

router.get('/all-chat', (req, res) => {
    Chat.find()
        .then(chats => res.status(200).json(chats))
        .catch(err => res.status(400).json({ err: 'no message here' }));
});

router.post('/send-chat', (req, res) => {
    Chat.create(req.body)
        .then(chat => res.status(200).json({ msg: 'Sent!' }))
        .catch(err => res.status(400).json({ err: 'Can not send' }));
});

module.exports = router;