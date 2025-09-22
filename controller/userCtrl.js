const User = require("../models/userModel");
const { hashing } = require("../utils/crypt");

const createUser = async (req, res) => {
  try {
    req.body.password = await hashing(req.body.password);
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json({ message: "User Created Successfully!", success: true, data: savedUser });
  } catch (err) {
    if (err.message.includes("E11000")) {
      res.status(400).json({ success: false, message: "Email Already Exists!" });
    } else {
      res.status(400).json({ error: err.message });
    }
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const updObj = { isActive: true, isEmailVerified: true };
    const user = await User.findByIdAndUpdate(id, updObj, { new: true });
    res.status(204).json({ message: "Email Verified!", data: user, success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  verifyEmail,
};

// Encryption - Decryption
// Base64
// hashing
// bcrypt
