import asyncHandler from "express-async-handler";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import sendVerificationEmail, {
  sendResetPasswordEmail,
  sendResetSuccessEmail,
  sendWelcomeEmail,
} from "../nodemailer/emailService.js";
import { v4 as uuidv4 } from "uuid";

// POST - http://localhost:8080/api/v1/user/register
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, role } = req.body;

  // TODO: Validation
  if ([username, email, password].some((field) => field?.trim() === "")) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // TODO: Check user is already registered
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User with username or email already exists",
    });
  }

  //TODO:  Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  const verificationToken = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  //TODO: Create a new user
  const user = new User({
    username,
    email,
    password: hashedPassword,
    role: role || "user",
    avatar: req.file?.filename,
    verificationToken,
    verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
  });

  // TODO: save user
  await user.save();

  generateToken(res, user._id);

  console.log({ user });

  // TODO: Send verification email
  await sendVerificationEmail(user.email, verificationToken);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: {
      ...user._doc,
      password: undefined,
    },
  });
});

// POST - http://localhost:8080/api/v1/user/login
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password required" });
  }

  // Check email correct or not
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });
  }

  // Check password correct or not
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });
  }

  // Generate JWT token
  generateToken(res, user._id);

  user.lastLogin = new Date();
  await user.save();

  res.json({
    success: true,
    message: "Logged in successfully",
    user: {
      ...user._doc,
      password: undefined,
    },
  });
});

// POST - http://localhost:8080/api/v1/user/logout
export const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged out successfully" });
});

// POST - http://localhost:8080/api/v1/user/verify-email
export const verifyEmail = asyncHandler(async (req, res) => {
  const { code } = req.body;
  const user = await User.findOne({
    verificationToken: code,
    verificationTokenExpiresAt: { $gt: Date.now() },
  });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid or Expired verification code",
    });
  }
  user.isVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpiresAt = undefined;
  await user.save();

  await sendWelcomeEmail(user.email, user.username);

  res.status(200).json({
    success: true,
    message: "Email verified successfully",
    user: {
      ...user._doc,
      password: undefined,
    },
  });
});

// POST - http://localhost:8080/api/v1/user/forgot-password
export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ success: false, message: "User not found" });
  }

  const resetToken = uuidv4().replace(/-/g, "");
  const resetTokenExpiredAt = new Date(Date.now() + 10 * 60 * 1000);

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpiresAt = resetTokenExpiredAt;

  await user.save();

  await sendResetPasswordEmail(
    user.email,
    `http://localhost:5173/reset-password/${resetToken}`
  );

  res.status(200).json({
    success: true,
    message: "Reset password link sent to your email",
  });
});

// POST - http://localhost:8080/api/v1/user/reset-password
export const resetPassword = asyncHandler(async (req, res) => {
  const { resettoken } = req.params;
  const { password } = req.body;

  const user = await User.findOne({
    resetPasswordToken: resettoken,
    resetPasswordExpiresAt: { $gt: Date.now() },
  });
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid or Expired reset token" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpiresAt = undefined;

  await user.save();

  await sendResetSuccessEmail(user.email);

  res
    .status(200)
    .json({ success: true, message: "Password reset successfully" });
});

// GET - http://localhost:8080/api/v1/user/profile
export const getUserInfo = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  });
});

// GET - http://localhost:8080/api/v1/user
export const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.status(200).json({
    success: true,
    message: "Fetch users details successfully",
    user: user,
  });
});

// PUT - http://localhost:8080/api/v1/user/profile/id
export const updateUserProfile = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (username) user.username = username;
  if (email) user.email = email;
  if (password) {
    user.password = await bcrypt.hash(password, 10);
  }

  const updatedUser = await user.save();

  res.status(200).json({
    message: "User profile updated successfully",
    _id: updatedUser._id,
    username: updatedUser.username,
    email: updatedUser.email,
    role: updatedUser.role,
  });
});

// DELETE - http://localhost:8080/api/v1/user/id
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json({ message: "User deleted successfully" });
});
