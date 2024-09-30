import { Request, Response } from "express";
import { docenteService } from "../../models";

const getDocentes = async (req: Request, res: Response) => {
  console.log("getDocentes");
  try {
    // Recuperar todos los docentes
    const docentes = await docenteService.getAllDocentes();

    // Enviar la respuesta con los datos de los docentes
    return res.status(200).json({ docentes, type: "success" });
  } catch (error) {
    console.error("Error al recuperar los docentes:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default getDocentes;
