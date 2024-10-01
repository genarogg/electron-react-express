import { Request, Response } from "express";
import { asistenciaPersonalService } from "../../models";

const getAsistenciaPersonal = async (req: Request, res: Response) => {
  console.log("getAsistenciaPersonal");
  try {
    // Obtener todas las asistencias personales
    const asistencias = await asistenciaPersonalService.getAllAsistenciaPersonal();

    return res.status(200).json({ asistencias, type: "success" });
  } catch (error) {
    console.error("Error al obtener las asistencias personales:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default getAsistenciaPersonal;
