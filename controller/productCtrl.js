const ProductModel = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = { getProducts };
