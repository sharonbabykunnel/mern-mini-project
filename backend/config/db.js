const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const url = process.env.MONGO_URL;

const connectDB = mongoose.connect(url);

module.exports = connectDB;