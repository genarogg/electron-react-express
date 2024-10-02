import { Request, Response } from "express";
import { obreroService, bitacoraService } from "../../models";

const addObreroPost = async (req: Request, res: Response) => {
  console.log("addObreroPost");
  try {
    const {
      cod_cir,
      nombre_circuito,
      comuna,
      consejo_comunal,
      codigo_plantel,
      codigo_estadistico,
      codigo_dependencia,
      nombre_plantel,
      direccion_institucion,
      nivel_modalidad,
      nombres,
      apellidos,
      ci,
      acarigua,
      fecha_nac,
      telefono,
      direccion_de_habitacion,
      correo_electronico,
      fecha_ingreso_mppe,
      anos_servicio,
      titulo_obtenido,
      codigo_cargo,
      dependencia_nominal,
      estatus,
      reposo_permiso,
      inscrito_psuv,
      pertenece_movimiento_social,
      carnet_patria_codigo,
      carnet_patria_serial,
      tipo_voto,
      centro_votacion,
      observaciones,
    } = req.body;

    console.log("req.body", req.body);

    // Validar los datos recibidos
    if (!nombres || !apellidos || !ci) {
      return res
        .status(400)
        .json({ error: "Los campos nombres, apellidos y ci son obligatorios" });
    }

    // Crear el obrero
    await obreroService.createObrero({
      cod_cir,
      nombre_circuito,
      comuna,
      consejo_comunal,
      codigo_plantel,
      codigo_estadistico,
      codigo_dependencia,
      nombre_plantel,
      direccion_institucion,
      nivel_modalidad,
      nombres,
      apellidos,
      ci,
      acarigua,
      fecha_nac,
      telefono,
      direccion_de_habitacion,
      correo_electronico,
      fecha_ingreso_mppe,
      anos_servicio,
      titulo_obtenido,
      codigo_cargo,
      dependencia_nominal,
      estatus,
      reposo_permiso,
      inscrito_psuv,
      pertenece_movimiento_social,
      carnet_patria_codigo,
      carnet_patria_serial,
      tipo_voto,
      centro_votacion,
      observaciones,
    });
    await bitacoraService.createBitacoraEntry({
      usuario: "demo@demo.com",
      accion: `Obrero creado: ${nombres} ${apellidos} (${ci})`,
    });
    return res
      .status(201)
      .json({ message: "Obrero creado exitosamente", type: "success" });
  } catch (error) {
    console.error("Error al crear el obrero:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default addObreroPost;
