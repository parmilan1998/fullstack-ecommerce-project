import Feedback from "../models/feedback.models.js";
import asyncHandler from "express-async-handler";

// POST - http://localhost:8080/api/v1/feedback
export const createFeedback = asyncHandler(async (req, res) => {
  const { customer, email, phone, message } = req.body;

  if (!customer || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const feedback = await Feedback.create({
    customer,
    email,
    phone,
    message,
  });

  res.status(201).json({ message: "Feedback created successfully", feedback });
});

// GET - http://localhost:8080/api/v1/feedback
export const getFeedbacks = asyncHandler(async (req, res) => {
  const feedbacks = await Feedback.find({});
  res.status(200).json({ count: feedbacks.length, feedbacks: feedbacks });
});
