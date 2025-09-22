const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number },
    countryCode: { type: String },
    isActive: { type: Boolean, default: false },
    isEmailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.index("email", { unique: true });
module.exports = mongoose.model("users", userSchema);
