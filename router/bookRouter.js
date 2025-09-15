const express = require("express");
const { getAllBooks, addBook, updateBook, patchBook, deleteBook } = require("../controller/bookCtrl");

const router = express.Router();

router.get("/allBooks", getAllBooks);
router.get("/bookName", getAllBooks);
router.post("/addBook", addBook);
router.put("/update/:id", updateBook);
router.patch("/update/:id", patchBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
