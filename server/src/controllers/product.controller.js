import User from "../models/user.models.js";
import Product from "../models/product.models.js";
import asyncHandler from "express-async-handler";
import Category from "../models/category.models.js";
import cloudinary from "../utils/Cloudinary.js";

// POST - http://localhost:8080/api/v1/product
export const createProduct = asyncHandler(async (req, res) => {
  const {
    productName,
    productDescription,
    productImage,
    productPrice,
    productStocks,
    category: categoryName,
  } = req.body;
  console.log(req.body);

  // Check if the category exists
  const categoryDoc = await Category.findOne({ title: categoryName });
  console.log(categoryDoc.title);
  if (!categoryDoc) {
    return res.status(404).json({ message: "Category not found" });
  }

  // Check if a product with the same name already exists
  const existingProduct = await Product.findOne({ productName });
  if (existingProduct) {
    return res
      .status(400)
      .json({ message: "Product with the same name already exists" });
  }

  // Upload the product image to Cloudinary
  let uploadedImageUrl;
  try {
    const uploadResult = await cloudinary.uploader.upload(productImage, {
      public_id: `products/${productName}`,
      folder: "ecommerce",
    });
    uploadedImageUrl = uploadResult.secure_url;
  } catch (error) {
    return res.status(500).json({ message: "Failed to upload image", error });
  }

  // Create the product in the database
  const product = await Product.create({
    productName,
    productDescription,
    productImage: uploadedImageUrl,
    productPrice,
    productStocks,
    category: categoryDoc.title,
  });

  res.status(201).json({
    message: "Product created successfully",
    product: {
      ...product._doc,
    },
  });
});

// GET - http://localhost:8080/api/v1/product/list
export const getProducts = asyncHandler(async (req, res) => {});

// GET - http://localhost:8080/api/v1/product/id
export const getProductById = asyncHandler(async (req, res) => {});

// PUT - http://localhost:8080/api/v1/product/id
export const updateProduct = asyncHandler(async (req, res) => {});

// DELETE - http://localhost:8080/api/v1/product/id
export const deleteProduct = asyncHandler(async (req, res) => {});

// GET - http://localhost:8080/api/v1/product/query
export const queryProducts = asyncHandler(async (req, res) => {});
