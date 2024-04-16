const asyncHandler = require('express-async-handler');
const Admin = require('../model/userModel');
const generateToken = require('../utils/generateToken');

const login = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email, isAdmin: true });
        if (admin && (admin.matchPassword(password))) {
            generateToken(res, admin._id);
            res.status(200).json({
                _id: admin._id,
                name: admin.name,
                email: admin.email
            })
        } else {
            res.status(404)
            throw new Error('Admin Not Found');
        }
    } catch (error) {
        throw new Error(error)
    }
});

const logout = asyncHandler(async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
  } catch (error) {
    throw new Error(error);
  }
});

const adminPage = asyncHandler(async (req, res) => {
  try {
      const users = await Admin.find({ isAdmin: false }).select('-password isAdmin');
      res.json(users);
  } catch (error) {
    throw new Error(error);
  }
});

const searchUser = asyncHandler(async (req, res) => {
  try {
      const search = req.body.search;
      const users = await Admin.find({ name: { $regex: new RegExp(search, 'i') } });
      res.json(users);
  } catch (error) {
    throw new Error(error);
  }
});

const findeUser = asyncHandler(async (req, res) => {
  try {
      const id = req.params.userId;
      const user = await Admin.findById(id);
      if (user) {
          res.json(user);
      } else {
          res.status(404).json({ message: 'user not found' });
      }
  } catch (error) {
    throw new Error(error);
  }
});

const editeUser = asyncHandler(async (req, res) => {
  try {
      const id = req.params.userId;
      const user = await Admin.findById(id);
      if (user) {
          user.name = req.body.name || user.name;
          user.email = req.body.email || user.email;
          await user.save();
          res.json({ message: 'user updated' });
      } else {
          
      }
  } catch (error) {
    throw new Error(error);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
  } catch (error) {
    throw new Error(error);
  }
});

const createUser = asyncHandler(async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
    login,
    logout,
    adminPage,
    searchUser,
    findeUser,
    editeUser,
    deleteUser,
    createUser
}