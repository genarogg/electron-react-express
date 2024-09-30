interface DocentePersonal {
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
  dependencia: string;
  nivel_modalidad: string;
  nombres: string;
  apellidos: string;
  ci: string;
  fecha_nac: string;
  correo: string;
  fecha_ingreso_mppe: string;
  anos_servicio: string;
  titulo_pregrado: string;
  funcion: string;
  area_docente_especialista: string;
  codigo_cargo: string;
  dependencia_nominal: string;
  grado_seccion: string;
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

const docentePersonal: DocentePersonal[] = [
  {
    id: 1,
    cod_cir: "001",
    nombre_circuito: "Circuito 1",
    comuna: "Comuna Centro",
    consejo_comunal: "Consejo Comunal 1",
    codigo_plantel: "P001",
    codigo_estadistico: "EST001",
    codigo_dependencia: "DEP001",
    nombre_plantel: "Plantel A",
    direccion_institucion: "Calle Falsa 123, Centro",
    dependencia: "Nacional",
    nivel_modalidad: "Primaria",
    nombres: "Juan",
    apellidos: "Pérez",
    ci: "12345678",
    fecha_nac: "12/12/1980",
    correo: "juan@example.com",
    fecha_ingreso_mppe: "01/01/2010",
    anos_servicio: "14",
    titulo_pregrado: "Educación Básica",
    funcion: "Director",
    area_docente_especialista: "Matemáticas",
    codigo_cargo: "DOC001",
    dependencia_nominal: "MPPE",
    grado_seccion: "Grado 5, Sección A",
    estatus: "Activo",
    reposo_permiso: "N/A",
    inscrito_psuv: "SI",
    pertenece_movimiento_social: "UBCH",
    carnet_patria_codigo: "987654321",
    carnet_patria_serial: "123456789",
    tipo_voto: "Duro",
    centro_votacion: "Centro X",
    observaciones: "Cumple funciones en Plantel B también.",
  },
];

export { DocentePersonal, docentePersonal };
