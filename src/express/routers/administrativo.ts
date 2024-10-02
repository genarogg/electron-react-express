import {
  addAdministrativoPost,
  getAdministrativo,
  // deleteAdministrativo,
} from "../controllers/administrativo";

import express from "express";

const router = express.Router();

router.post("/add", addAdministrativoPost);

router.get("/get", getAdministrativo);

// router.delete("/delete/:id", deleteAdministrativo);

export default router;
