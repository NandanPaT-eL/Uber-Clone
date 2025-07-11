const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackList = require('../models/blacklist.model');
 
module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const {fullname, email, password} = req.body;

    const isUser = await userModel.findOne({email});

    if(isUser) {
        return res.status(400).json({message: "Email already exists"});
    }

    const hashpass = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashpass
    });

    const token = user.generateAuthToken();

    res.status(201).json({token, user});
}

module.exports.loginUser = async (req, res, next) => {
    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('+password');

    if(!user) {
        return res.status(401).json({message: "Invalid credentials"});
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch) {
        return res.status(401).json({message: "Invalid credentials"});
    }
    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({token, user});
}

module.exports.getProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blackList.create({token});
    res.status(200).json({message: "Logged out"});
}