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
    this.createObrerosTable(); // Crear la tabla 'obreros'
    this.createAdministrativosTable(); // Crear la tabla 'administrativos'
    this.createCocinerosTable(); // Crear la tabla 'cocineros'
    this.createAsistenciaPersonalTable(); // Crear la tabla 'asistencia_personal'
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

  private createObrerosTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS obreros (
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
        nivel_modalidad TEXT,
        nombres TEXT,
        apellidos TEXT,
        ci TEXT,
        acarigua TEXT,
        fecha_nac TEXT,
        telefono TEXT,
        direccion_de_habitacion TEXT,
        correo_electronico TEXT,
        fecha_ingreso_mppe TEXT,
        anos_servicio INTEGER,
        titulo_obtenido TEXT,
        codigo_cargo TEXT,
        dependencia_nominal TEXT,
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
      console.error("Error al crear la tabla 'obreros':", error);
    }
  }

  private createAdministrativosTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS administrativos (
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
        nivel_modalidad TEXT,
        nombres TEXT,
        apellidos TEXT,
        ci TEXT,
        acarigua TEXT,
        fecha_nac TEXT,
        telefono TEXT,
        direccion_de_habitacion TEXT,
        correo_electronico TEXT,
        fecha_ingreso_mppe TEXT,
        anos_servicio INTEGER,
        titulo_obtenido TEXT,
        codigo_cargo TEXT,
        dependencia_nominal TEXT,
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
      console.error("Error al crear la tabla 'administrativos':", error);
    }
  }

  private createCocinerosTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS cocineros (
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
        nivel_modalidad TEXT,
        nombres TEXT,
        apellidos TEXT,
        ci TEXT,
        fecha_nac TEXT,
        telefono TEXT,
        direccion_de_habitacion TEXT,
        correo_electronico TEXT,
        fecha_ingreso_mppe TEXT,
        anos_servicio TEXT,
        titulo_obtenido TEXT,
        codigo_cargo TEXT,
        dependencia_nominal TEXT,
        estatus TEXT,
        reposo_permiso TEXT,
        inscrito_psuv TEXT,
        pertenece_movimiento_social TEXT,
        carnet_patria_codigo TEXT,
        carnet_patria_serial TEXT,
        centro_votacion TEXT,
        tipo_voto TEXT,
        observaciones TEXT
      );
    `;

    try {
      this.db.exec(createTableQuery);
    } catch (error) {
      console.error("Error al crear la tabla 'cocineros':", error);
    }
  }

  private createAsistenciaPersonalTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS asistencia_personal (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        personal_id INTEGER NOT NULL,
        nombres TEXT NOT NULL,
        apellidos TEXT NOT NULL,
        ci TEXT NOT NULL,
        fecha TEXT NOT NULL,
        hora_entrada TEXT,
        FOREIGN KEY(personal_id) REFERENCES users(id)
      );
    `;

    try {
      this.db.exec(createTableQuery);
    } catch (error) {
      console.error("Error al crear la tabla 'asistencia_personal':", error);
    }
  }

  public getDatabase() {
    return this.db;
  }
}

const databaseManager = new DatabaseManager();
export default databaseManager;
