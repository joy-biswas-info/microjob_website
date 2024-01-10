import express from "express";
import { createOrder, getOrder } from "../controllers/order.controller.js";
const router = express.Router();
import { verifyToken } from "../middleware/jwt.js";

router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrder);

export default router;
