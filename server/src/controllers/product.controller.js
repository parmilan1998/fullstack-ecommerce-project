import User from "../models/user.models.js";
import Product from "../models/product.models.js";
import asyncHandler from "express-async-handler";
import Category from "../models/category.models.js";

// POST - http://localhost:8080/api/v1/product
export const createProduct = asyncHandler(async (req, res) => {});

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
