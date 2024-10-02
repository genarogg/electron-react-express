interface Bitacora {
  id: number;
  usuario: string;
  accion: string;
  fecha: string;
  hora: string;
}

const bitacora: Bitacora[] = [];

export { Bitacora, bitacora };
