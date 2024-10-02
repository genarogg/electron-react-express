import express from "express";
import bitacoraGet from "../controllers/bitacoraGet";
const router = express.Router();

router.get("/", bitacoraGet);

export default router;
