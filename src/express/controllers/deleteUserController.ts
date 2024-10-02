import { Request, Response } from "express";
import { deleteUserByCi, bitacoraService } from "../models";

const deleteUserController = async (req: Request, res: Response) => {
  console.log("deleteUserController");
  try {
    const { ci } = req.params;

    // Validar que la cédula esté presente
    if (!ci) {
      return res.status(400).json({ error: "La cédula es obligatoria" });
    }

    // Eliminar el usuario
    const result = deleteUserByCi(ci);

    if (!result) {
      return res
        .status(404)
        .json({ message: "Usuario no encontrado", type: "error" });
    }

    await bitacoraService.createBitacoraEntry({
      usuario: "demo@demo.com",
      accion: `Usuario eliminado: ${ci}`,
    });

    return res.status(200).json({
      message: "Usuario eliminado exitosamente",
      type: "success",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default deleteUserController;
