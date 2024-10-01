import databaseManager from "./configDB";
import UserService from "./UserService";
import DocenteService from "./DocenteService";
import ObreroService from "./ObreroService";

const userService = new UserService();
const docenteService = new DocenteService();
const obreroService = new ObreroService();

export { databaseManager, userService, docenteService, obreroService };
