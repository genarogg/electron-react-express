import { addPost, getDocentes } from "../controllers/docente";

import express from "express";

const router = express.Router();

router.post("/add", addPost);

router.get("/get", getDocentes);

export default router;
