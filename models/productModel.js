const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Schema of Products Collection
// Classes

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
    stockQty: { type: Number, required: true },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;

// Ctrl -> Query DB -> Model -> Collection
