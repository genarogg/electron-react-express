import crearUsuario from "./crearUsuario";
import fakeAdministrativos from "./fakeAdministrativos";
import insertFakeCocineros from "./insertFakeCocineros";
import insertFakeDocentes from "./insertFakeDocentes";
import insertFakeObreros from "./insertFakeObreros";
import chalk from "chalk";

const fakeData = async () => {
  await crearUsuario();
  await fakeAdministrativos();
  await insertFakeCocineros();
  await insertFakeDocentes();
  await insertFakeObreros();

  console.log(chalk.green.bold(`Datos falsos creados exitosamente.`));
};

export default fakeData;
