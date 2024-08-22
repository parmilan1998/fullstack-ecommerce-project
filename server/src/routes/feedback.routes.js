import express from "express";
import {
  createFeedback,
  getFeedbacks,
  //   getFeedbackById,
  //   queryFeedback,
  //   updateFeedback,
  //   deleteFeedback,
} from "../controllers/feedback.controller.js";

const router = express.Router();

router.post("/", createFeedback);
router.get("/", getFeedbacks);
// router.get("/query", queryFeedback);
// router.get("/:id", getFeedbackById);
// router.put("/:id", updateFeedback);
// router.delete("/:id", deleteFeedback);

export default router;
