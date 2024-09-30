import databaseManager from "./configDB";
import UserService from "./UserService";
import DocenteService from "./DocenteService";

const userService = new UserService();
const docenteService = new DocenteService();

export { databaseManager, userService, docenteService };
