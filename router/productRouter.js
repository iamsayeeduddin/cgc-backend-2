const express = require("express");
const { getProducts, addProduct, updateProduct, deleteProduct, getPaginatedProducts } = require("../controller/productCtrl");
const { isAdmin } = require("../middleware/auth");

const router = express.Router();

router.get("/allProducts", getProducts);
router.get("/allProducts/:page/:pageSize", getPaginatedProducts);
router.post("/addProduct", isAdmin, addProduct);
router.patch("/updateProduct/:id", isAdmin, updateProduct);
router.delete("/deleteProduct/:id", isAdmin, deleteProduct);

module.exports = router;
