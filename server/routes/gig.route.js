import express from "express";
import {
  createGig,
  deleteGig,
  gigs,
  singleGig,
  updateGig,
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();

router.post("/", verifyToken, createGig);
router.get("/gigs", verifyToken, gigs);
router.get("/single/:id", verifyToken, singleGig);
router.patch("/update/:id", verifyToken, updateGig);
router.delete("/delete/:id", verifyToken, deleteGig);

export default router;
