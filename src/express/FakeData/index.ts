import crearUsuario from "./crearUsuario";
import fakeAdministrativos from "./fakeAdministrativos";
import insertFakeCocineros from "./insertFakeCocineros";
import insertFakeDocentes from "./insertFakeDocentes";
import insertFakeObreros from "./insertFakeObreros";

import { generateAsistencia } from "../controllers/asistencia/generateAsistencia";
import chalk from "chalk";

const fakeData = async () => {
  await crearUsuario();
  await fakeAdministrativos();
  await insertFakeCocineros();
  await insertFakeDocentes();
  await insertFakeObreros();
  await generateAsistencia();
  console.log(chalk.green.bold(`Datos falsos creados exitosamente.`));
};

export default fakeData;
