import databaseManager from "./configDB";
import UserService from "./UserService";

const userService = new UserService();

export { databaseManager, userService };
