import { Request, Response } from "express";
import { obreroService } from "../../models";

const getObreros = async (req: Request, res: Response) => {
  console.log("getObreros");
  try {
    // Recuperar todos los obreros
    const obreros = await obreroService.getAllObreros();

    // Enviar la respuesta con los datos de los obreros
    return res.status(200).json({ obreros, type: "success" });
  } catch (error) {
    console.error("Error al recuperar los obreros:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default getObreros;