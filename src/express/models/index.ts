import databaseManager from "./configDB";
import UserService from "./UserService";
import DocenteService from "./DocenteService";
import ObreroService from "./ObreroService";
import AdministrativoService from "./AdministrativoService";
import CocineroService from "./CocineroService";
import AsistenciaPersonalService from "./AsistenciaPersonalService";
import getUserByCi from "./getUserByCi";
import deleteUserByCi from "./deleteUserByCi";
import BitacoraService from "./BitacoraService";

const userService = new UserService();
const docenteService = new DocenteService();
const obreroService = new ObreroService();
const administrativoService = new AdministrativoService();
const cocineroService = new CocineroService();
const asistenciaPersonalService = new AsistenciaPersonalService();
const bitacoraService = new BitacoraService();
export {
  databaseManager,
  userService,
  docenteService,
  obreroService,
  administrativoService,
  cocineroService,
  asistenciaPersonalService,
  getUserByCi,
  deleteUserByCi,
  bitacoraService,
};
