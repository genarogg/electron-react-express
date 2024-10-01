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
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const { personal_id, nombres, apellidos } = user;

    // Obtener la fecha y hora actual del sistema
    const fecha = moment().format("YYYY-MM-DD");
    const hora_entrada = moment().format("hh:mm:ss A");

    console.log({ personal_id, nombres, apellidos, ci, fecha, hora_entrada });

    // Crear la asistencia personal
    await asistenciaPersonalService.createAsistenciaPersonal({
      personal_id,
      nombres,
      apellidos,
      ci,
      fecha,
      hora_entrada,
    });

    return res.status(201).json({
      message: "Asistencia personal creada exitosamente",
      type: "success",
    });
  } catch (error) {
    console.error("Error al crear la asistencia personal:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default addAsistenciaPersonalPost;
