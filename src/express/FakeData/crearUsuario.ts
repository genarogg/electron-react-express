import { usuarioEmail, usuarioPassword } from "../../../env";
import UserService from "../models/UserService";
import bcrypt from "bcryptjs";

const crearUsuario = async () => {
  const userService = new UserService();

  // Generar un hash de la contraseña
  const hashedPassword = bcrypt.hashSync(usuarioPassword, 10);

  // Crear el usuario con la contraseña hasheada
  userService.createUser(usuarioEmail, hashedPassword);
};

export default crearUsuario;
