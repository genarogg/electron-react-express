import { Database } from "node-sqlite3-wasm";
import path from "path";
import { app } from "electron";

class DatabaseManager {
  private db: Database;

  constructor() {
    // Determinar la ruta de la base de datos dependiendo del entorno
    const isPackaged = app.isPackaged;
    const basePath = isPackaged
      ? path.join(process.resourcesPath, "database.db")
      : path.join(__dirname, "database.db");

    this.db = new Database(basePath);
    this.createUsersTable();
    this.createDocentesTable(); // Crear la tabla 'docentes'
  }

  private createUsersTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    try {
      this.db.exec(createTableQuery);
    } catch (error) {
      console.error("Error al crear la tabla 'users':", error);
    }
  }

  private createDocentesTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS docentes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cod_cir TEXT,
        nombre_circuito TEXT,
        comuna TEXT,
        consejo_comunal TEXT,
        codigo_plantel TEXT,
        codigo_estadistico TEXT,
        codigo_dependencia TEXT,
        nombre_plantel TEXT,
        direccion_institucion TEXT,
        dependencia TEXT,
        nivel_modalidad TEXT,
        nombres TEXT,
        apellidos TEXT,
        ci TEXT,
        fecha_nac TEXT,
        correo TEXT,
        fecha_ingreso_mppe TEXT,
        anos_servicio INTEGER,
        titulo_pregrado TEXT,
        funcion TEXT,
        area_docente_especialista TEXT,
        codigo_cargo TEXT,
        dependencia_nominal TEXT,
        grado_seccion TEXT,
        estatus TEXT,
        reposo_permiso TEXT,
        inscrito_psuv TEXT,
        pertenece_movimiento_social TEXT,
        carnet_patria_codigo TEXT,
        carnet_patria_serial TEXT,
        tipo_voto TEXT,
        centro_votacion TEXT,
        observaciones TEXT
      );
    `;

    try {
      this.db.exec(createTableQuery);
    } catch (error) {
      console.error("Error al crear la tabla 'docentes':", error);
    }
  }

  public getDatabase() {
    return this.db;
  }
}

const databaseManager = new DatabaseManager();
export default databaseManager;
