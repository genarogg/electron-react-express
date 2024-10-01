import { Request, Response } from "express";
import CocineroService from "../../models/CocineroService";

const cocineroService = new CocineroService();

const getCocineros = async (req: Request, res: Response) => {
  console.log("getCocineros");
  try {
    // Recuperar todos los cocineros
    const cocineros = await cocineroService.getAllCocineros();

    console.log("cocineros", cocineros);

    // Enviar la respuesta con los datos de los cocineros
    return res.status(200).json({ cocineros, type: "success" });
  } catch (error) {
    console.error("Error al recuperar los cocineros:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default getCocineros;
