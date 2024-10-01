import databaseManager from "./configDB";

const getUserByCi = (ci: string) => {
  const db = databaseManager.getDatabase();
  const queries = [
    `SELECT id as personal_id, nombres, apellidos FROM docentes WHERE ci = ?`,
    `SELECT id as personal_id, nombres, apellidos FROM obreros WHERE ci = ?`,
    `SELECT id as personal_id, nombres, apellidos FROM administrativos WHERE ci = ?`,
    `SELECT id as personal_id, nombres, apellidos FROM cocineros WHERE ci = ?`,
  ];

  for (const query of queries) {
    const user = db.get(query, [ci]);
    if (user) {
      return user;
    }
  }

  return null;
};

export default getUserByCi;