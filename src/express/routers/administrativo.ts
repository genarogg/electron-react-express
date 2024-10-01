import {
  addAdministrativoPost,
  getAdministrativo,
} from "../controllers/administrativo";

import express from "express";

const router = express.Router();

router.post("/add", addAdministrativoPost);

router.get("/get", getAdministrativo);

export default router;
