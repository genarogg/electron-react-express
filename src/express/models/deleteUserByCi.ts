import databaseManager from "./configDB";

const deleteUserByCi = (ci: string): boolean => {
  const db = databaseManager.getDatabase();
  const queries = [
    `DELETE FROM docentes WHERE ci = ?`,
    `DELETE FROM obreros WHERE ci = ?`,
    `DELETE FROM administrativos WHERE ci = ?`,
    `DELETE FROM cocineros WHERE ci = ?`,
  ];

  for (const query of queries) {
    const result = db.run(query, [ci]);
    if (result.changes > 0) {
      return true; // Usuario eliminado exitosamente
    }
  }

  return false; // Usuario no encontrado en ninguna tabla
};

export default deleteUserByCi;
