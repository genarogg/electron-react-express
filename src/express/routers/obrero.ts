import { addObreroPost, getObreros } from "../controllers/obrero";

import express from "express";

const router = express.Router();

router.post("/add", addObreroPost);

router.get("/get", getObreros);

export default router;
