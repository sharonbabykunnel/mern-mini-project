const jwt = require('jsonwebtoken');

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.SECRET, { expiresIn: '10d' })
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_EVN !== 'development',
        sameSite: "strict",
        maxAge:10 * 24 * 60 * 60 * 1000
    })
}

module.exports = generateToken;