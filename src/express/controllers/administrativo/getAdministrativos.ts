import { Request, Response } from "express";
import { administrativoService } from "../../models";

const getAdministrativos = async (req: Request, res: Response) => {
  console.log("getAdministrativos");
  try {
    // Recuperar todos los administrativos
   
    const administrativos = await administrativoService.getAllAdministrativos();

    console.log("administrativos", administrativos);

    // Enviar la respuesta con los datos de los administrativos
    return res.status(200).json({ administrativos, type: "success" });
  } catch (error) {
    console.error("Error al recuperar los administrativos:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default getAdministrativos;
