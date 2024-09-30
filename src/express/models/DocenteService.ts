import databaseManager from "./configDB";

class DocenteService {
  private db: any;

  constructor() {
    this.db = databaseManager.getDatabase();
  }

  // Método para crear un nuevo docente
  public createDocente(docenteData: any) {
    const insertQuery = `
      INSERT INTO docentes (
        cod_cir, nombre_circuito, comuna, consejo_comunal, codigo_plantel,
        codigo_estadistico, codigo_dependencia, nombre_plantel, direccion_institucion,
        dependencia, nivel_modalidad, nombres, apellidos, ci, fecha_nac, correo,
        fecha_ingreso_mppe, anos_servicio, titulo_pregrado, funcion,
        area_docente_especialista, codigo_cargo, dependencia_nominal, grado_seccion,
        estatus, reposo_permiso, inscrito_psuv, pertenece_movimiento_social,
        carnet_patria_codigo, carnet_patria_serial, tipo_voto, centro_votacion,
        observaciones
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
      docenteData.cod_cir,
      docenteData.nombre_circuito,
      docenteData.comuna,
      docenteData.consejo_comunal,
      docenteData.codigo_plantel,
      docenteData.codigo_estadistico,
      docenteData.codigo_dependencia,
      docenteData.nombre_plantel,
      docenteData.direccion_institucion,
      docenteData.dependencia,
      docenteData.nivel_modalidad,
      docenteData.nombres,
      docenteData.apellidos,
      docenteData.ci,
      docenteData.fecha_nac,
      docenteData.correo,
      docenteData.fecha_ingreso_mppe,
      docenteData.anos_servicio,
      docenteData.titulo_pregrado,
      docenteData.funcion,
      docenteData.area_docente_especialista,
      docenteData.codigo_cargo,
      docenteData.dependencia_nominal,
      docenteData.grado_seccion,
      docenteData.estatus,
      docenteData.reposo_permiso,
      docenteData.inscrito_psuv,
      docenteData.pertenece_movimiento_social,
      docenteData.carnet_patria_codigo,
      docenteData.carnet_patria_serial,
      docenteData.tipo_voto,
      docenteData.centro_votacion,
      docenteData.observaciones,
    ];

    try {
      this.db.run(insertQuery, values);
    } catch (error) {
      console.error("Error al crear el docente:", error);
    }
  }

  // Método para obtener un docente por su ID
  public getDocenteById(id: number) {
    const selectQuery = `
      SELECT * FROM docentes WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener el docente:", error);
    }
  }

  // Método para obtener todos los docentes
  public getAllDocentes() {
    const selectQuery = `
      SELECT * FROM docentes;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener los docentes:", error);
    }
  }

  // Método para actualizar un docente por su ID
  public updateDocente(id: number, docenteData: any) {
    const updateQuery = `
      UPDATE docentes SET
        cod_cir = ?, nombre_circuito = ?, comuna = ?, consejo_comunal = ?, codigo_plantel = ?,
        codigo_estadistico = ?, codigo_dependencia = ?, nombre_plantel = ?, direccion_institucion = ?,
        dependencia = ?, nivel_modalidad = ?, nombres = ?, apellidos = ?, ci = ?, fecha_nac = ?, correo = ?,
        fecha_ingreso_mppe = ?, anos_servicio = ?, titulo_pregrado = ?, funcion = ?,
        area_docente_especialista = ?, codigo_cargo = ?, dependencia_nominal = ?, grado_seccion = ?,
        estatus = ?, reposo_permiso = ?, inscrito_psuv = ?, pertenece_movimiento_social = ?,
        carnet_patria_codigo = ?, carnet_patria_serial = ?, tipo_voto = ?, centro_votacion = ?,
        observaciones = ?
      WHERE id = ?;
    `;

    const values = [
      docenteData.cod_cir,
      docenteData.nombre_circuito,
      docenteData.comuna,
      docenteData.consejo_comunal,
      docenteData.codigo_plantel,
      docenteData.codigo_estadistico,
      docenteData.codigo_dependencia,
      docenteData.nombre_plantel,
      docenteData.direccion_institucion,
      docenteData.dependencia,
      docenteData.nivel_modalidad,
      docenteData.nombres,
      docenteData.apellidos,
      docenteData.ci,
      docenteData.fecha_nac,
      docenteData.correo,
      docenteData.fecha_ingreso_mppe,
      docenteData.anos_servicio,
      docenteData.titulo_pregrado,
      docenteData.funcion,
      docenteData.area_docente_especialista,
      docenteData.codigo_cargo,
      docenteData.dependencia_nominal,
      docenteData.grado_seccion,
      docenteData.estatus,
      docenteData.reposo_permiso,
      docenteData.inscrito_psuv,
      docenteData.pertenece_movimiento_social,
      docenteData.carnet_patria_codigo,
      docenteData.carnet_patria_serial,
      docenteData.tipo_voto,
      docenteData.centro_votacion,
      docenteData.observaciones,
      id,
    ];

    try {
      this.db.run(updateQuery, values);
    } catch (error) {
      console.error("Error al actualizar el docente:", error);
    }
  }

  // Método para eliminar un docente por su ID
  public deleteDocente(id: number) {
    const deleteQuery = `
      DELETE FROM docentes WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar el docente:", error);
    }
  }
}

export default DocenteService;
