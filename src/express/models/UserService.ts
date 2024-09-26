import databaseManager from "./configDB";

class UserService {
  private db: any;

  constructor() {
    this.db = databaseManager.getDatabase();
  }

  // Método para crear un nuevo usuario
  public createUser(email: string, password: string) {
    const insertQuery = `
        INSERT INTO users (email, password)
        VALUES (?, ?);
      `;

    try {
      this.db.run(insertQuery, [email, password]);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  }

  // Método para obtener un usuario por su ID
  public getUserById(id: number) {
    const selectQuery = `
        SELECT * FROM users WHERE id = ?;
      `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
    }
  }

  // Método para obtener un usuario por su email
  public getUserByEmail(email: string) {
    const selectQuery = `
            SELECT * FROM users WHERE email = ?;
            `;

    try {
      return this.db.get(selectQuery, [email]);
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
    }
  }
}

export default UserService;
