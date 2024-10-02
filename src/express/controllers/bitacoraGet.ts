import { bitacoraService } from "../models";
import { Request, Response } from "express";

const bitacoraGet = async (req: Request, res: Response) => {
  console.log("bitacoraGet");
  try {
    const bitacora = await bitacoraService.getAllBitacoraEntries();
    return res.status(200).json({ bitacora, type: "success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default bitacoraGet;
