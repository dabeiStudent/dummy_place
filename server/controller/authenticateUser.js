const User = require('../models/userModel');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
    const hashPass = await argon2.hash(req.body.passWord);
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        dob: req.body.dob,
        userName: req.body.userName,
        passWord: hashPass,
        isAdmin: false
    })
        .then(user => res.status(200).json({ msg: 'Added' }))
        .catch(err => res.status(400).json({ err: 'Something went wrong' }))
};

const userLogin = async (req, res) => {
    const password = req.body.passWord;
    if (!req.body.userName || !password) {
        return res.status(404).json({ err: 'Please enter username and password!' });
    }
    try {
        const userFound = await User.findOne({ userName: req.body.userName })
        if (userFound) {
            const validPassword = await argon2.verify(userFound.passWord, password);
            if (validPassword) {
                const data_in = jwt.sign({
                    firstName: userFound.firstName,
                    lastName: userFound.lastName,
                    gender: userFound.gender,
                    dob: userFound.dob,
                    userName: userFound.userName,
                    isAdmin: userFound.isAdmin
                }, process.env.JWT_KEY);
                res.cookie("token", data_in, {
                    httpOnly: true, expires: new Date(Date.now() + 864000)
                })
                return res.status(200).json({ msg: 'Welcome', username: userFound.userName, firstname: userFound.firstName });
            } else {
                return res.status(404).json({ err: 'Username/Password not match!' });
            }
        } else {
            return res.status(404).json({ err: 'Username/Password not match!' });
        }
    } catch {
        return res.status(500).json({ err: 'Something went wrong' });
    }
};

const userLogout = (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({ msg: 'Good bye!' });
}


module.exports = { userRegister, userLogin, userLogout };