// routes/productRoutes.js
const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProductsByName,
} = require("../controllers/productController");

// search first so it won't conflict with :id route
router.get("/search", searchProductsByName);

// CRUD
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
