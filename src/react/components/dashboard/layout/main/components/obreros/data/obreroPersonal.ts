interface ObreroPersonal {
  id: number;
  cod_cir: string;
  nombre_circuito: string;
  comuna: string;
  consejo_comunal: string;
  codigo_plantel: string;
  codigo_estadistico: string;
  codigo_dependencia: string;
  nombre_plantel: string;
  direccion_institucion: string;
  nivel_modalidad: string;
  nombres: string;
  apellidos: string;
  ci: string;
  acarigua: string;
  fecha_nac: string;
  telefono: string;
  direccion_de_habitacion: string;
  correo_electronico: string;
  fecha_ingreso_mppe: string;
  anos_servicio: string;
  titulo_obtenido: string;
  codigo_cargo: string;
  dependencia_nominal: string;
  estatus: string;
  reposo_permiso: string;
  inscrito_psuv: string;
  pertenece_movimiento_social: string;
  carnet_patria_codigo: string;
  carnet_patria_serial: string;
  centro_votacion: string;
  tipo_voto: string;
  observaciones: string;
}

const obreroPersonal: ObreroPersonal[] = [
 
];

export { ObreroPersonal, obreroPersonal };
