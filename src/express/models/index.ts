import databaseManager from "./configDB";
import UserService from "./UserService";
import DocenteService from "./DocenteService";
import ObreroService from "./ObreroService";
import AdministrativoService from "./AdministrativoService";

const userService = new UserService();
const docenteService = new DocenteService();
const obreroService = new ObreroService();
const administrativoService = new AdministrativoService();

export {
  databaseManager,
  userService,
  docenteService,
  obreroService,
  administrativoService,
};
