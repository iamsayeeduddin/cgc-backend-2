const bcrypt = require("bcrypt");

const hashing = (plainTxt) => {
  return bcrypt.hash(plainTxt, 5);
};

module.exports = {
  hashing,
};
