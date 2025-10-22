const express = require("express");
const { getProducts, addProduct, updateProduct, deleteProduct, getPaginatedProducts, getProductById } = require("../controller/productCtrl");
const { isAdmin, auth } = require("../middleware/auth");

const router = express.Router();

router.get("/allProducts", auth, getProducts);
router.get("/allProducts/:page/:pageSize", getPaginatedProducts);
router.get("/:productId", getProductById);
router.post("/addProduct", isAdmin, addProduct);
router.patch("/updateProduct/:id", isAdmin, updateProduct);
router.delete("/deleteProduct/:id", isAdmin, deleteProduct);

module.exports = router;
