import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getUserInfo,
  getUsers,
  updateUserProfile,
  deleteUser,
} from "../controllers/user.controllers.js";
import { protect } from "../middlewares/auth.middlewares.js";
import { userUpload } from "../middlewares/multer.middlewares.js";

const router = express.Router();

router.post("/register", userUpload.single("avatar"), registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:resettoken", resetPassword);
router.get("/", getUsers);
router.get("/profile", protect, getUserInfo);
router.put("/profile/:id", protect, updateUserProfile);
router.delete("/:id", deleteUser);

export default router;
