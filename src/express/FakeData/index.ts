import crearUsuario from "./crearUsuario";
import chalk from "chalk";

const fakeData = async () => {


  await crearUsuario();

  console.log(chalk.green.bold(`Datos falsos creados exitosamente.`));
};

export default fakeData;
