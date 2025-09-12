const express = require("express");
const { getAllBooks } = require("../controller/bookCtrl");

const router = express.Router();

router.get("/allBooks", getAllBooks);
router.get("/bookName", getAllBooks);

module.exports = router;
