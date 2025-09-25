const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hashing = (plainTxt) => {
  return bcrypt.hash(plainTxt, 5);
};

const compareHash = (plainTxt, hashedTxt) => {
  return bcrypt.compare(plainTxt, hashedTxt);
};

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: 120 });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};

module.exports = {
  hashing,
  verifyToken,
  compareHash,
  generateToken,
};
