import { Request, Response } from "express";
import { docenteService } from "../../models";

const addPost = async (req: Request, res: Response) => {
  console.log("addPost");
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
      dependencia,
      nivel_modalidad,
      nombres,
      apellidos,
      ci,
      fecha_nac,
      correo,
      fecha_ingreso_mppe,
      anos_servicio,
      titulo_pregrado,
      funcion,
      area_docente_especialista,
      codigo_cargo,
      dependencia_nominal,
      grado_seccion,
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

    // Crear el docente
    await docenteService.createDocente({
      cod_cir,
      nombre_circuito,
      comuna,
      consejo_comunal,
      codigo_plantel,
      codigo_estadistico,
      codigo_dependencia,
      nombre_plantel,
      direccion_institucion,
      dependencia,
      nivel_modalidad,
      nombres,
      apellidos,
      ci,
      fecha_nac,
      correo,
      fecha_ingreso_mppe,
      anos_servicio,
      titulo_pregrado,
      funcion,
      area_docente_especialista,
      codigo_cargo,
      dependencia_nominal,
      grado_seccion,
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

    return res
      .status(201)
      .json({ message: "Docente creado exitosamente", type: "success" });
  } catch (error) {
    console.error("Error al crear el docente:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default addPost;
