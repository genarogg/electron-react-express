import databaseManager from "./configDB";

class AsistenciaPersonalService {
  private db: any;

  constructor() {
    this.db = databaseManager.getDatabase();
  }

  // Método para crear una nueva asistencia personal
  public createAsistenciaPersonal(asistenciaData: any) {
    const insertQuery = `
      INSERT INTO asistencia_personal (
        personal_id, nombres, apellidos, ci, fecha, hora_entrada
      ) VALUES (?, ?, ?, ?, ?, ?);
    `;

    const values = [
      asistenciaData.personal_id,
      asistenciaData.nombres,
      asistenciaData.apellidos,
      asistenciaData.ci,
      asistenciaData.fecha,
      asistenciaData.hora_entrada,
    ];

    try {
      this.db.run(insertQuery, values);
    } catch (error) {
      console.error("Error al crear la asistencia personal:", error);
    }
  }

  // Método para obtener una asistencia personal por su ID
  public getAsistenciaPersonalById(id: number) {
    const selectQuery = `
      SELECT * FROM asistencia_personal WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener la asistencia personal:", error);
    }
  }

  // Método para obtener todas las asistencias personales
  public getAllAsistenciaPersonal() {
    const selectQuery = `
      SELECT * FROM asistencia_personal;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener las asistencias personales:", error);
    }
  }

  // Método para actualizar una asistencia personal por su ID
  public updateAsistenciaPersonal(id: number, asistenciaData: any) {
    const updateQuery = `
      UPDATE asistencia_personal SET
        personal_id = ?, nombres = ?, apellidos = ?, ci = ?, fecha = ?, hora_entrada = ?
      WHERE id = ?;
    `;

    const values = [
      asistenciaData.personal_id,
      asistenciaData.nombres,
      asistenciaData.apellidos,
      asistenciaData.ci,
      asistenciaData.fecha,
      asistenciaData.hora_entrada,
      id,
    ];

    try {
      this.db.run(updateQuery, values);
    } catch (error) {
      console.error("Error al actualizar la asistencia personal:", error);
    }
  }

  // Método para eliminar una asistencia personal por su ID
  public deleteAsistenciaPersonal(id: number) {
    const deleteQuery = `
      DELETE FROM asistencia_personal WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar la asistencia personal:", error);
    }
  }
}

export default AsistenciaPersonalService;
