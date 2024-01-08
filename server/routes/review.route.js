import express from "express";
const router = express.Router();
import { verifyToken } from "../middleware/jwt.js";
import {
  createReview,
  deleteReview,
  getReview,
} from "../controllers/review.controller.js";
import { updateGig } from "../controllers/gig.controller.js";

router.post("/", verifyToken, createReview);
router.delete("/delete/:gigId", verifyToken, deleteReview);
router.put("/update/:gigId", verifyToken, updateGig);
router.get("/:gigId", verifyToken, getReview);

export default router;
