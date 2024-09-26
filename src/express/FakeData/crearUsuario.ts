import { usuarioEmail, usuarioPassword } from "../../../env";
import UserService from "../models/UserService";

import bcript from "bcrypt";

const crearUsuario = async () => {
  const userService = new UserService();

  userService.createUser(usuarioEmail, bcript.hashSync(usuarioPassword, 10));
};

export default crearUsuario;
