const express = require("express");
const { deleteUser, getUserById, getUsers, updateUser, createUser, verifyEmail, login } = require("../controller/userCtrl.js");
const upload = require("../utils/upload.js");

const router = express.Router();

router.get("/allUsers", getUsers);
router.get("/:id", getUserById);
router.post("/login", login);
router.post("/createUser", upload.single("profilePic"), createUser);
router.patch("/verifyEmail/:id", verifyEmail);
router.patch("/updateUser/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
