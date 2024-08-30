import User from "../models/user.models.js";
import Product from "../models/product.models.js";
import asyncHandler from "express-async-handler";
import Category from "../models/category.models.js";

//TODO: POST - http://localhost:8080/api/v1/product
export const createProduct = asyncHandler(async (req, res) => {
  const {
    productName,
    productDescription,
    productPrice,
    productStocks,
    discount,
    categoryName,
  } = req.body;

  if (
    !productName ||
    !productDescription ||
    !productPrice ||
    !productStocks ||
    !discount ||
    !categoryName
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const category = await Category.findOne({ categoryName });
  console.log("Category: ", category);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  const discountPrice = productPrice - productPrice * (discount / 100);

  const productImage = req.files.map((file) => file.filename);

  const product = await Product.create({
    productName,
    productDescription,
    productImage,
    productPrice,
    discountPrice,
    discount: discount || 0,
    productStocks,
    category: category._id,
  });

  res.status(201).json({
    message: "Product created successfully",
    product,
  });
});

//TODO: GET - http://localhost:8080/api/v1/product
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

//TODO: GET - http://localhost:8080/api/v1/product/id
export const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({ product: product });
});

//TODO: PUT - http://localhost:8080/api/v1/product/id
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    productName,
    productDescription,
    productPrice,
    productStocks,
    categoryName,
    discount,
    discountPrice,
  } = req.body;

  const category = await Category.findOne({ categoryName });

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  const productImage = req.files
    ? req.files.map((file) => file.filename)
    : undefined;

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      productName,
      productDescription,
      productPrice,
      productStocks,
      discountPice: productPrice - productPrice * (discount / 100),
      discount,
      category: category._id,
      ...(productImage && { productImage }),
    },
    { new: true }
  );

  if (!updatedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({
    message: "Product updated successfully!",
    updatedProduct: updatedProduct,
  });
});

//TODO: DELETE - http://localhost:8080/api/v1/product/id
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res
    .status(200)
    .json({ message: "Product deleted successfully", product: product });
});

//TODO: GET - http://localhost:8080/api/v1/product/query
export const queryProducts = asyncHandler(async (req, res) => {
  const { page = 1, limit = 5, search = "", sort = "asc" } = req.query;

  // Search Filter
  const searchProduct = {
    $or: [
      { categoryName: { $regex: search, $options: "i" } },
      { productName: { $regex: search, $options: "i" } },
    ],
  };

  // Sort
  const sortProduct = sort === "desc" ? -1 : 1;

  const offset = (page - 1) * limit;

  const products = await Product.find(searchProduct)
    .sort({ productName: sortProduct })
    .skip(offset)
    .limit(parseInt(limit));

  const totalProductCount = await Product.countDocuments(searchProduct);

  res.status(200).json({
    products,
    currentPage: parseInt(page),
    limit: parseInt(limit),
    totalPages: Math.ceil(totalProductCount / limit),
    totalItems: totalProductCount,
  });
});
