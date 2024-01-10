import express from "express";
import { verifyToken } from "../middleware/jwt.js";

import {
  createConversation,
  getConversation,
  getSingleConversation,
  updateConversation,
} from "../controllers/conversation.controller.js";
const router = express.Router();

router.post("/", verifyToken, createConversation);
router.get("/", verifyToken, getConversation);
router.get("/single/:id", verifyToken, getSingleConversation);
router.put("/update/:id", verifyToken, updateConversation);
export default router;
