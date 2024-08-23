import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
  updateUserProfile,
  deleteUser,
} from "../controllers/user.controllers.js";
import { protect } from "../middlewares/auth.middlewares.js";
import { userUpload } from "../middlewares/multer.middlewares.js";

const router = express.Router();

router.post("/register", userUpload.single("avatar"), registerUser);
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);
router.get("/profile", protect, getUserInfo);
router.put("/profile/:id", protect, updateUserProfile);
router.delete("/:id", protect, deleteUser);

export default router;
