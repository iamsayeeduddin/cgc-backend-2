const bcrypt = require("bcrypt");

const hashing = (plainTxt) => {
  return bcrypt.hash(plainTxt, 5);
};

const compareHash = (plainTxt, hashedTxt) => {
  return bcrypt.compare(plainTxt, hashedTxt);
};

module.exports = {
  hashing,
  compareHash,
};
