import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  queryProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { productUpload } from "../middlewares/multer.middlewares.js";

const router = express.Router();

router.post("/", productUpload.array("productImage"), createProduct);
router.get("/", getProducts);
router.get("/query", queryProducts);
router.get("/:id", getProductById);
router.put("/:id", productUpload.array("productImage"), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
