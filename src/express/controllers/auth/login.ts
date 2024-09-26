import { Request, Response } from "express";

import bcrypt from "bcrypt";

import { generarToken } from "../../functions";

/* import { Usuario, BitacoraLogin } from "@models"; */

const loginPost = async (req: Request, res: Response) => {
  // { correo: "example@gmail", contrasena: "123456", captcha: "123456}
  const { correo, contrasena } = req.body;

  /* const usuario = await Usuario.findOne({ where: { correo } });

  if (!usuario) {
    // El usuario no existe, envía una respuesta indicando que es incorrecto
    return res.status(400).json({ error: "Usuario no existe" });
  }

  if (usuario.status === "inactive") {
    return res.status(400).json({ error: "Usuario inactivo" });
  }

  if (!bcrypt.compareSync(contrasena, usuario.contrasena)) {
    // La contraseña no coincide, envía una respuesta indicando que es incorrecta
    return res.status(400).json({ error: "Usuario o contraseña incorrectos" });
  }

  const token = generarToken(usuario); */

  //@Bitacora

  //   const { ip, headers } = req;
  //   const userAgent = headers["user-agent"];

  // Envía el token en la respuesta
  res.status(200).json({ mensaje: "inicio sesion", /* token */ });
};

export { loginPost };
