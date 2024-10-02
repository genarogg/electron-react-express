import databaseManager from "./configDB";
import moment from "moment";
class BitacoraService {
  private db: any;

  constructor() {
    this.db = databaseManager.getDatabase();
  }

  // Método para crear un nuevo registro en la bitácora
  public createBitacoraEntry(bitacoraData: any) {
    const insertQuery = `
      INSERT INTO bitacora (
        usuario, accion, fecha, hora
      ) VALUES (?, ?, ?, ?);
    `;

    const hora = moment().format("HH:mm:ss A");
    const fecha = moment().format("YYYY-MM-DD");

    const values = [bitacoraData.usuario, bitacoraData.accion, fecha, hora];

    try {
      this.db.run(insertQuery, values);
    } catch (error) {
      console.error("Error al crear el registro en la bitácora:", error);
    }
  }

  // Método para obtener un registro de la bitácora por su ID
  public getBitacoraEntryById(id: number) {
    const selectQuery = `
      SELECT * FROM bitacora WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener el registro de la bitácora:", error);
    }
  }

  // Método para obtener todos los registros de la bitácora
  public getAllBitacoraEntries() {
    const selectQuery = `
      SELECT * FROM bitacora;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener los registros de la bitácora:", error);
    }
  }

  // Método para actualizar un registro de la bitácora por su ID
  public updateBitacoraEntry(id: number, bitacoraData: any) {
    const updateQuery = `
      UPDATE bitacora SET
        usuario = ?, accion = ?, fecha = ?, hora = ?
      WHERE id = ?;
    `;

    const values = [
      bitacoraData.usuario,
      bitacoraData.accion,
      bitacoraData.fecha,
      bitacoraData.hora,
      id,
    ];

    try {
      this.db.run(updateQuery, values);
    } catch (error) {
      console.error("Error al actualizar el registro de la bitácora:", error);
    }
  }

  // Método para eliminar un registro de la bitácora por su ID
  public deleteBitacoraEntry(id: number) {
    const deleteQuery = `
      DELETE FROM bitacora WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar el registro de la bitácora:", error);
    }
  }
}

export default BitacoraService;
