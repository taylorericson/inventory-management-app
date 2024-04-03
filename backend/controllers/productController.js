const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
Product;

const createProduct = asyncHandler(async (req, res) => {
  const { name, sku, category, quantity, price, description } = req.body;

  // Validate
  if (!name || !category || !quantity || !price || !description) {
    res.status(40);
    throw new Error("Please complete all fields");
  }

  // Manage Image Upload

  // Create Product
  const product = await Product.create({
    user: req.user.id,
    name,
    sku,
    category,
    quantity,
    price,
    description,
  });

  res.status(201).json(product);
});

module.exports = {
  createProduct,
};
