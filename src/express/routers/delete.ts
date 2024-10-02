import express from "express";
import deleteUserController from "../controllers/deleteUserController";
const router = express.Router();

router.delete("/delete/:ci", deleteUserController);

export default router;
