import express from "express";
import {
  addAsistenciaPersonalPost,
  getAsistenciaPersonal,
} from "../controllers/asistencia";

const router = express.Router();

router.post("/add", addAsistenciaPersonalPost);
router.get("/get", getAsistenciaPersonal);

export default router;
