const express = require('express');
const admin = require('../controller/adminController')
const route = express.Router();


route.post('/login', admin.login);
route.get('/logout', admin.logout);
route.get('/admin', admin.adminPage);
route.post('/search',admin.searchUser)
route.get('/user/:userId', admin.findeUser);
route.put('/editUser', admin.editeUser);
route.post('/deleteUser', admin.deleteUser);
route.post('/createUser', admin.createUser);

module.exports = route;