import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // in 15 mins, max 10 requests from IP address
  message: "Too many requests, please try again later",
});

import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
