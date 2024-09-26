import express from "express";
import { loginPost } from "../controllers/auth/login";
const router = express.Router();

router.post("/", loginPost);

export default router;
