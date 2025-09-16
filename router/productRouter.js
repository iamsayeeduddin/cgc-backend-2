const express = require("express");
const { getProducts } = require("../controller/productCtrl");

const router = express.Router();

router.get("/allProducts", getProducts);

module.exports = router;
