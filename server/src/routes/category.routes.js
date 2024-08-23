import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
  queryCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";
import { categoryUpload } from "../middlewares/multer.middlewares.js";

const router = express.Router();

router.post("/", categoryUpload.single("image"), createCategory);
router.get("/", getCategories);
router.get("/query", queryCategory);
router.get("/:id", getCategoryById);
router.put("/:id", categoryUpload.single("image"), updateCategory);
router.delete("/:id", deleteCategory);

export default router;
