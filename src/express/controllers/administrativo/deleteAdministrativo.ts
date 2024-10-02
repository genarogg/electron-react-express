/* import { administrativoService } from "../../models";
import { Request, Response } from "express";

const deleteAdministrativo = async (req: Request, res: Response) => {
  console.log("deleteAdministrativo");
  try {
    const { id } = req.params;

    // Validar que el ID esté presente
    if (!id) {
      return res.status(400).json({ error: "El ID es obligatorio" });
    }

    // Eliminar el administrativo
    const result = await administrativoService.deleteAdministrativo(Number(id));

    console.log("result", result);

    if (!result) {
      return res
        .status(404)
        .json({ message: "Administrativo no encontrado", type: "error" });
    }

    return res.status(200).json({
      message: "Administrativo eliminado exitosamente",
      type: "success",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default deleteAdministrativo;
 */