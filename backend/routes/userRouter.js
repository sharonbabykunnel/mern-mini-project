const express = require('express');
const user = require('../controller/userController');
const protect = require('../middlewares/authMiddleware');
const rout = express.Router();

rout.post('/login', user.login);
rout.post("/register", user.register);
rout.get('/logout', user.logout);
rout.get('/profile', protect, user.getProfile).put('/profile', protect, user.editeProfile);


module.exports = rout;