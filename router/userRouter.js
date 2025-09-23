const express = require("express");
const { deleteUser, getUserById, getUsers, updateUser, createUser, verifyEmail, login } = require("../controller/userCtrl.js");

const router = express.Router();

router.get("/allUsers", getUsers);
router.get("/:id", getUserById);
router.post("/login", login);
router.post("/createUser", createUser);
router.patch("/verifyEmail/:id", verifyEmail);
router.patch("/updateUser/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
