const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
const generateToken = require('../utils/generateToken');
const { use } = require('../routes/userRouter');

const login = asyncHandler(async(req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            if (user && (await user.matchPassword(password))) {
              generateToken(res, user._id);
              res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
              });
            }
        } else {
            res.status(400);
            throw new error
        }
    } catch (error) {
        throw new Error(error)
    }
})

const register = asyncHandler(async (req, res) => {
  try {
      const { name, email, password } = req.body;
      const checkUser = await User.findOne({ email });
      if (checkUser) {
          res.status(400).json({ message: "User Already Exists" });
        } else {
            const user = await User.create({ name, email, password });
          if (user) {
              generateToken(res, user._id);
              res.json({
                  _id: user._id,
                  name: user.name,
                  email:user.email
              })
          }
      }
  } catch (error) {
      res.status(400);
    throw new Error(error);
  }
});

const logout = asyncHandler(async (req, res) => {
    try {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        });
        res.status(200).json({ message: "User Logged Out" });
  } catch (error) {
    throw new Error(error);
  }
});

const editeProfile = asyncHandler(async (req, res) => {
    try {
        const user = await User.useModel.findById(req.user._id);
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password;
            }
            const updatedUser = await user.save();
            res.status(200).json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email:updatedUser.email
            })
        }
  } catch (error) {
    throw new Error(error);
  }
});

const getProfile = asyncHandler(async (req, res) => {
    try {
        res.status(200).json({ message: "User Profile" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
    login,
    register,
    logout,
    getProfile,
    editeProfile
}