import { addCocineroPost, getCocineros } from "../controllers/cocinero";

import express from "express";

const router = express.Router();

router.post("/add", addCocineroPost);

router.get("/get", getCocineros);

export default router;
