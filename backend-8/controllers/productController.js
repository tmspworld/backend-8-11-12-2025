// controllers/productController.js
const Product = require("../models/Product");

// GET /api/products
exports.getAllProducts = async (req, res) => {
  console.log("Fetching all products");
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ success: true, count: products.length, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /api/products/:id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    res
      .status(400)
      .json({ success: false, message: "Invalid product id or server error" });
  }
};

// POST /api/products
exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body); // validation by mongoose
    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: product,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// PUT /api/products/:id
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    res
      .status(200)
      .json({ success: true, message: "Product updated", data: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// GET /api/products/search?name=xxx
exports.searchProductsByName = async (req, res) => {
  try {
    const name = req.query.name;
    if (!name)
      return res
        .status(400)
        .json({ success: false, message: "Please provide search name" });

    const regex = new RegExp(name, "i"); // case-insensitive
    const products = await Product.find({ name: { $regex: regex } });
    res
      .status(200)
      .json({ success: true, count: products.length, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
