import databaseManager from "./configDB";

class AdministrativoService {
  private db: any;

  constructor() {
    this.db = databaseManager.getDatabase();
  }

  // Método para crear un nuevo administrativo
  public createAdministrativo(administrativoData: any) {
    const insertQuery = `
      INSERT INTO administrativos (
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
      administrativoData.cod_cir,
      administrativoData.nombre_circuito,
      administrativoData.comuna,
      administrativoData.consejo_comunal,
      administrativoData.codigo_plantel,
      administrativoData.codigo_estadistico,
      administrativoData.codigo_dependencia,
      administrativoData.nombre_plantel,
      administrativoData.direccion_institucion,
      administrativoData.nivel_modalidad,
      administrativoData.nombres,
      administrativoData.apellidos,
      administrativoData.ci,

      administrativoData.fecha_nac,
      administrativoData.telefono,
      administrativoData.direccion_de_habitacion,
      administrativoData.correo_electronico,
      administrativoData.fecha_ingreso_mppe,
      administrativoData.anos_servicio,
      administrativoData.titulo_obtenido,
      administrativoData.codigo_cargo,
      administrativoData.dependencia_nominal,
      administrativoData.estatus,
      administrativoData.reposo_permiso,
      administrativoData.inscrito_psuv, // Convertir booleano a texto
      administrativoData.pertenece_movimiento_social,
      administrativoData.carnet_patria_codigo,
      administrativoData.carnet_patria_serial,
      administrativoData.tipo_voto,
      administrativoData.centro_votacion,
      administrativoData.observaciones,
    ];

    try {
      this.db.run(insertQuery, values);
    } catch (error) {
      console.error("Error al crear el administrativo:", error);
    }
  }

  // Método para obtener un administrativo por su ID
  public getAdministrativoById(id: number) {
    const selectQuery = `
      SELECT * FROM administrativos WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener el administrativo:", error);
    }
  }

  // Método para obtener todos los administrativos
  public getAllAdministrativos() {
    const selectQuery = `
      SELECT * FROM administrativos;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener los administrativos:", error);
    }
  }

  // Método para actualizar un administrativo por su ID
  public updateAdministrativo(id: number, administrativoData: any) {
    const updateQuery = `
      UPDATE administrativos SET
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
      administrativoData.cod_cir,
      administrativoData.nombre_circuito,
      administrativoData.comuna,
      administrativoData.consejo_comunal,
      administrativoData.codigo_plantel,
      administrativoData.codigo_estadistico,
      administrativoData.codigo_dependencia,
      administrativoData.nombre_plantel,
      administrativoData.direccion_institucion,
      administrativoData.nivel_modalidad,
      administrativoData.nombres,
      administrativoData.apellidos,
      administrativoData.ci,

      administrativoData.fecha_nac,
      administrativoData.telefono,
      administrativoData.direccion_de_habitacion,
      administrativoData.correo_electronico,
      administrativoData.fecha_ingreso_mppe,
      administrativoData.anos_servicio,
      administrativoData.titulo_obtenido,
      administrativoData.codigo_cargo,
      administrativoData.dependencia_nominal,
      administrativoData.estatus,
      administrativoData.reposo_permiso,
      administrativoData.inscrito_psuv,
      administrativoData.pertenece_movimiento_social,
      administrativoData.carnet_patria_codigo,
      administrativoData.carnet_patria_serial,
      administrativoData.tipo_voto,
      administrativoData.centro_votacion,
      administrativoData.observaciones,
      id,
    ];

    try {
      this.db.run(updateQuery, values);
    } catch (error) {
      console.error("Error al actualizar el administrativo:", error);
    }
  }

  // Método para eliminar un administrativo por su ID
  public deleteAdministrativo(id: number) {
    const deleteQuery = `
      DELETE FROM administrativos WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar el administrativo:", error);
    }
  }
}

export default AdministrativoService;
