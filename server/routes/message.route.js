import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createMessages,
  getMessages,
} from "../controllers/message.controller.js";
const router = express.Router();

router.post("/", verifyToken, createMessages);
router.get("/", verifyToken, getMessages);

export default router;
