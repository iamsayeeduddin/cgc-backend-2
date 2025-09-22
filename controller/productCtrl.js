const ProductModel = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    // SELECT * FROM PRODUCTS
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const getPaginatedProducts = async (req, res) => {
  try {
    const page = +req.params.page;
    const pageSize = +req.params.pageSize;
    const skip = (page - 1) * pageSize;
    const sort = req.query.sort;
    const dir = req.query.dir;
    const search = req.query.search;
    const isActive = Boolean(req.query.isActive);

    let sortObj = {}; // Object to be passed for sorting of Data
    if (sort && dir) {
      sortObj[sort] = dir;
    }

    let filter = {}; // Object to be passed to search / filter a product/s
    if (search) {
      filter = {
        $and: [{ $or: [{ name: { $regex: search, $options: "i" } }, { category: { $regex: search, $options: "i" } }] }, { inStock: isActive }],
      };
    }

    const products = await ProductModel.find(filter).sort(sortObj).skip(skip).limit(pageSize);
    const totalRecords = await ProductModel.countDocuments(filter);

    let response = {
      metadata: {
        page,
        pageSize,
        success: true,
        totalRecords,
      },
      data: products,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const addProduct = async (req, res) => {
  try {
    const data = req.body;
    // if (data.stockQty === undefined) {
    //   data.inStock = false;
    // }
    data.inStock = (data.stockQty || 0) > 0 ? true : false;
    const product = new ProductModel(data);
    await product.save();
    res.status(201).json({ message: "Product Added Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    const product = await ProductModel.findByIdAndUpdate(productId, data, { new: true });
    let resp = { success: true, message: "Product Updated Successfully!", data: product };
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await ProductModel.findByIdAndDelete(productId);
    let resp = { success: true, message: "Product Delete Successfully!" };
    res.status(200).json(resp);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

module.exports = { getProducts, addProduct, deleteProduct, getPaginatedProducts, updateProduct };

// PAGINATION
// 100 - 10 - 10
// 105 - 10 - 11
// 1 Page - 10
// 2 Page - Skip 1st 10 Records and the 2nd 10 records

// USERS
// fullName, email, password, role - Number
// SORTING
// FILTERING OR SEARCHING
