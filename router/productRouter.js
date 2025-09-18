const express = require("express");
const { getProducts, addProduct, updateProduct, deleteProduct, getPaginatedProducts } = require("../controller/productCtrl");

const router = express.Router();

router.get("/allProducts", getProducts);
router.get("/allProducts/:page/:pageSize", getPaginatedProducts);
router.post("/addProduct", addProduct);
router.patch("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
