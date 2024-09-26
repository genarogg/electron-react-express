// Limpia la consola
import clear from "console-clear";
clear();

import express, { Request, Response } from "express";

import chalk from "chalk";
import cors from "cors";

// variables de entorno
const PORT = process.env.PORT || 4000;
const CORS_URL = process.env.CORS_URL || "*";

// Crear una instancia de express
const app = express();

// Usa cors como middleware
app.use(cors({ origin: CORS_URL }));

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Conexión a la base de datos
import databaseManager from "./models/index";

(async () => {
  try {
    databaseManager; // Inicializa la base de datos
    console.log(chalk.cyan("Database synchronized successfully."));
  } catch (error) {
    console.log(chalk.red("Unable to synchronize the database:", error));
  }
})();

// Importar rutas
import { authRouter } from "./routers/index";

/* app.use("/", inicioRouter); */
app.use("/auth", authRouter);

// Middleware de manejo de errores
app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send("¡Algo salió mal!");
});

import fakeData from "./FakeData/index";

app.listen(PORT, () => {
  console.log(
    chalk.green.bold(`El servidor esta corriendo http://localhost:${PORT}`)
  );
  fakeData();
});

export default app;
