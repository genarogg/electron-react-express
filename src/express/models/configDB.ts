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

  public getDatabase() {
    return this.db;
  }
}

const databaseManager = new DatabaseManager();
export default databaseManager;
