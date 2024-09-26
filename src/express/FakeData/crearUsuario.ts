import { usuarioEmail, usuarioPassword } from "../../../env";
import UserService from "../models/UserService";

const crearUsuario = async () => {
  const userService = new UserService();

  userService.createUser(usuarioEmail, usuarioPassword);
};

export default crearUsuario;
