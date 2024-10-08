import jwt from "jsonwebtoken";

interface Usuario {
  id: number;
}

const generarToken = (usuario: Usuario) => {
  const JWTSECRETO = process.env.JWTSECRETO || "jwt-secret";
  const JWTTIEMPO = process.env.JWTTIEMPO || "1h";

  const { id } = usuario;

  const token = jwt.sign(
    {
      id,
    },

    JWTSECRETO,

    {
      expiresIn: JWTTIEMPO,
    }
  );

  return token;
};

export default generarToken;
