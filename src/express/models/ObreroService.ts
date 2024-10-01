import databaseManager from "./configDB";

class ObreroService {
  private db: any;

  constructor() {
    this.db = databaseManager.getDatabase();
  }

  // Método para crear un nuevo obrero
  public createObrero(obreroData: any) {
    const insertQuery = `
      INSERT INTO obreros (
        cod_cir, nombre_circuito, comuna, consejo_comunal, codigo_plantel,
        codigo_estadistico, codigo_dependencia, nombre_plantel, direccion_institucion,
        nivel_modalidad, nombres, apellidos, ci, acarigua, fecha_nac, telefono,
        direccion_de_habitacion, correo_electronico, fecha_ingreso_mppe, anos_servicio,
        titulo_obtenido, codigo_cargo, dependencia_nominal, estatus, reposo_permiso,
        inscrito_psuv, pertenece_movimiento_social, carnet_patria_codigo, carnet_patria_serial,
        tipo_voto, centro_votacion, observaciones
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
      obreroData.cod_cir,
      obreroData.nombre_circuito,
      obreroData.comuna,
      obreroData.consejo_comunal,
      obreroData.codigo_plantel,
      obreroData.codigo_estadistico,
      obreroData.codigo_dependencia,
      obreroData.nombre_plantel,
      obreroData.direccion_institucion,
      obreroData.nivel_modalidad,
      obreroData.nombres,
      obreroData.apellidos,
      obreroData.ci,
      obreroData.acarigua,
      obreroData.fecha_nac,
      obreroData.telefono,
      obreroData.direccion_de_habitacion,
      obreroData.correo_electronico,
      obreroData.fecha_ingreso_mppe,
      obreroData.anos_servicio,
      obreroData.titulo_obtenido,
      obreroData.codigo_cargo,
      obreroData.dependencia_nominal,
      obreroData.estatus,
      obreroData.reposo_permiso,
      obreroData.inscrito_psuv,
      obreroData.pertenece_movimiento_social,
      obreroData.carnet_patria_codigo,
      obreroData.carnet_patria_serial,
      obreroData.tipo_voto,
      obreroData.centro_votacion,
      obreroData.observaciones,
    ];

    try {
      this.db.run(insertQuery, values);
    } catch (error) {
      console.error("Error al crear el obrero:", error);
    }
  }

  // Método para obtener un obrero por su ID
  public getObreroById(id: number) {
    const selectQuery = `
      SELECT * FROM obreros WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener el obrero:", error);
    }
  }

  // Método para obtener todos los obreros
  public getAllObreros() {
    const selectQuery = `
      SELECT * FROM obreros;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener los obreros:", error);
    }
  }

  // Método para actualizar un obrero por su ID
  public updateObrero(id: number, obreroData: any) {
    const updateQuery = `
      UPDATE obreros SET
        cod_cir = ?, nombre_circuito = ?, comuna = ?, consejo_comunal = ?, codigo_plantel = ?,
        codigo_estadistico = ?, codigo_dependencia = ?, nombre_plantel = ?, direccion_institucion = ?,
        nivel_modalidad = ?, nombres = ?, apellidos = ?, ci = ?, acarigua = ?, fecha_nac = ?, telefono = ?,
        direccion_de_habitacion = ?, correo_electronico = ?, fecha_ingreso_mppe = ?, anos_servicio = ?,
        titulo_obtenido = ?, codigo_cargo = ?, dependencia_nominal = ?, estatus = ?, reposo_permiso = ?,
        inscrito_psuv = ?, pertenece_movimiento_social = ?, carnet_patria_codigo = ?, carnet_patria_serial = ?,
        tipo_voto = ?, centro_votacion = ?, observaciones = ?
      WHERE id = ?;
    `;

    const values = [
      obreroData.cod_cir,
      obreroData.nombre_circuito,
      obreroData.comuna,
      obreroData.consejo_comunal,
      obreroData.codigo_plantel,
      obreroData.codigo_estadistico,
      obreroData.codigo_dependencia,
      obreroData.nombre_plantel,
      obreroData.direccion_institucion,
      obreroData.nivel_modalidad,
      obreroData.nombres,
      obreroData.apellidos,
      obreroData.ci,
      obreroData.acarigua,
      obreroData.fecha_nac,
      obreroData.telefono,
      obreroData.direccion_de_habitacion,
      obreroData.correo_electronico,
      obreroData.fecha_ingreso_mppe,
      obreroData.anos_servicio,
      obreroData.titulo_obtenido,
      obreroData.codigo_cargo,
      obreroData.dependencia_nominal,
      obreroData.estatus,
      obreroData.reposo_permiso,
      obreroData.inscrito_psuv,
      obreroData.pertenece_movimiento_social,
      obreroData.carnet_patria_codigo,
      obreroData.carnet_patria_serial,
      obreroData.tipo_voto,
      obreroData.centro_votacion,
      obreroData.observaciones,
      id,
    ];

    try {
      this.db.run(updateQuery, values);
    } catch (error) {
      console.error("Error al actualizar el obrero:", error);
    }
  }

  // Método para eliminar un obrero por su ID
  public deleteObrero(id: number) {
    const deleteQuery = `
      DELETE FROM obreros WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar el obrero:", error);
    }
  }
}

export default ObreroService;
