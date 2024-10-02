import { Request, Response } from "express";
import { getUserByCi, asistenciaPersonalService } from "../../models";
import moment from "moment";

const addAsistenciaPersonalPost = async (req: Request, res: Response) => {
  console.log("addAsistenciaPersonalPost");
  try {
    const { ci } = req.body;

    console.log("req.body", req.body);

    // Validar los datos recibidos
    if (!ci) {
      return res.status(400).json({ error: "El campo ci es obligatorio" });
    }

    // Buscar el usuario por ci en las tablas docentes, obreros, administrativos y cocineros
    const user = getUserByCi(ci);

    if (!user) {
      return res
        .status(404)
        .json({ message: "Usuario no encontrado", type: "error" });
    }
    const fechaNow = moment().format("YYYY-MM-DD");

    const asistenciaDate = await asistenciaPersonalService.getAsistenciaPersonalByFechaYCi(
      fechaNow,
      ci
    );

    console.log("asistenciaDate", asistenciaDate);

    await asistenciaPersonalService.updateAsistenciaPersonal(
      asistenciaDate.id,
      {
        ...asistenciaDate,
        hora_entrada: moment().format("hh:mm:ss A"),
        vino: 1,
      }
    );

    return res.status(201).json({
      message: "Asistencia registrada correctamente",
      type: "success",
    });
  } catch (error) {
    console.error("Error al crear la asistencia personal:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default addAsistenciaPersonalPost;
