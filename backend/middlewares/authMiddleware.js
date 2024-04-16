const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');

const protect = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (token) {
            const decode = jwt.verify(token, process.env.SECRET);
            req.user = User.findById(decode.userId).select('-password -isAdmin');
            next();
        } else {
            res.status(401)
            throw new Error("Not authorized ,Invalid Token");
        }
    } catch (error) {
        res.status(401);
        throw new error
    }
});

module.exports = protect