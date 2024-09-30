import { addPost } from "../controllers/docente";

import express from "express";

const router = express.Router();

router.post("/add", addPost);

export default router;