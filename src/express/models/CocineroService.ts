import databaseManager from "./configDB";

class CocineroService {
  private db: any;

  constructor() {
    this.db = databaseManager.getDatabase();
  }

  // Método para crear un nuevo cocinero
  public createCocinero(cocineroData: any) {
    const insertQuery = `
      INSERT INTO cocineros (
        cod_cir, nombre_circuito, comuna, consejo_comunal, codigo_plantel,
        codigo_estadistico, codigo_dependencia, nombre_plantel, direccion_institucion,
        nivel_modalidad, nombres, apellidos, ci, fecha_nac, telefono,
        direccion_de_habitacion, correo_electronico, fecha_ingreso_mppe, anos_servicio,
        titulo_obtenido, codigo_cargo, dependencia_nominal, estatus, reposo_permiso,
        inscrito_psuv, pertenece_movimiento_social, carnet_patria_codigo, carnet_patria_serial,
        tipo_voto, centro_votacion, observaciones
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
      cocineroData.cod_cir,
      cocineroData.nombre_circuito,
      cocineroData.comuna,
      cocineroData.consejo_comunal,
      cocineroData.codigo_plantel,
      cocineroData.codigo_estadistico,
      cocineroData.codigo_dependencia,
      cocineroData.nombre_plantel,
      cocineroData.direccion_institucion,
      cocineroData.nivel_modalidad,
      cocineroData.nombres,
      cocineroData.apellidos,
      cocineroData.ci,
      cocineroData.fecha_nac,
      cocineroData.telefono,
      cocineroData.direccion_de_habitacion,
      cocineroData.correo_electronico,
      cocineroData.fecha_ingreso_mppe,
      cocineroData.anos_servicio,
      cocineroData.titulo_obtenido,
      cocineroData.codigo_cargo,
      cocineroData.dependencia_nominal,
      cocineroData.estatus,
      cocineroData.reposo_permiso,
      cocineroData.inscrito_psuv ? "true" : "false", // Convertir booleano a texto
      cocineroData.pertenece_movimiento_social,
      cocineroData.carnet_patria_codigo,
      cocineroData.carnet_patria_serial,
      cocineroData.tipo_voto,
      cocineroData.centro_votacion,
      cocineroData.observaciones,
    ];

    try {
      this.db.run(insertQuery, values);
    } catch (error) {
      console.error("Error al crear el cocinero:", error);
    }
  }

  // Método para obtener un cocinero por su ID
  public getCocineroById(id: number) {
    const selectQuery = `
      SELECT * FROM cocineros WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener el cocinero:", error);
    }
  }

  // Método para obtener todos los cocineros
  public getAllCocineros() {
    const selectQuery = `
      SELECT * FROM cocineros;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener los cocineros:", error);
    }
  }

  // Método para actualizar un cocinero por su ID
  public updateCocinero(id: number, cocineroData: any) {
    const updateQuery = `
      UPDATE cocineros SET
        cod_cir = ?, nombre_circuito = ?, comuna = ?, consejo_comunal = ?, codigo_plantel = ?,
        codigo_estadistico = ?, codigo_dependencia = ?, nombre_plantel = ?, direccion_institucion = ?,
        nivel_modalidad = ?, nombres = ?, apellidos = ?, ci = ?, fecha_nac = ?, telefono = ?,
        direccion_de_habitacion = ?, correo_electronico = ?, fecha_ingreso_mppe = ?, anos_servicio = ?,
        titulo_obtenido = ?, codigo_cargo = ?, dependencia_nominal = ?, estatus = ?, reposo_permiso = ?,
        inscrito_psuv = ?, pertenece_movimiento_social = ?, carnet_patria_codigo = ?, carnet_patria_serial = ?,
        tipo_voto = ?, centro_votacion = ?, observaciones = ?
      WHERE id = ?;
    `;

    const values = [
      cocineroData.cod_cir,
      cocineroData.nombre_circuito,
      cocineroData.comuna,
      cocineroData.consejo_comunal,
      cocineroData.codigo_plantel,
      cocineroData.codigo_estadistico,
      cocineroData.codigo_dependencia,
      cocineroData.nombre_plantel,
      cocineroData.direccion_institucion,
      cocineroData.nivel_modalidad,
      cocineroData.nombres,
      cocineroData.apellidos,
      cocineroData.ci,
      cocineroData.fecha_nac,
      cocineroData.telefono,
      cocineroData.direccion_de_habitacion,
      cocineroData.correo_electronico,
      cocineroData.fecha_ingreso_mppe,
      cocineroData.anos_servicio,
      cocineroData.titulo_obtenido,
      cocineroData.codigo_cargo,
      cocineroData.dependencia_nominal,
      cocineroData.estatus,
      cocineroData.reposo_permiso,
      cocineroData.inscrito_psuv ? "true" : "false", // Convertir booleano a texto
      cocineroData.pertenece_movimiento_social,
      cocineroData.carnet_patria_codigo,
      cocineroData.carnet_patria_serial,
      cocineroData.tipo_voto,
      cocineroData.centro_votacion,
      cocineroData.observaciones,
      id,
    ];

    try {
      this.db.run(updateQuery, values);
    } catch (error) {
      console.error("Error al actualizar el cocinero:", error);
    }
  }

  // Método para eliminar un cocinero por su ID
  public deleteCocinero(id: number) {
    const deleteQuery = `
      DELETE FROM cocineros WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar el cocinero:", error);
    }
  }
}

export default CocineroService;
