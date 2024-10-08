import { administrativoService } from "../models";

const fakeAdministrativosData = async () => {
  const fakeAdministrativos = [
    {
      cod_cir: "001",
      nombre_circuito: "Circuito 1",
      comuna: "Comuna 1",
      consejo_comunal: "Consejo 1",
      codigo_plantel: "P001",
      codigo_estadistico: "E001",
      codigo_dependencia: "D001",
      nombre_plantel: "Plantel 1",
      direccion_institucion: "Dirección 1",
      nivel_modalidad: "Modalidad 1",
      nombres: "Nombre 1",
      apellidos: "Apellido 1",
      ci: "12345678",
      acarigua: "Acarigua 1",
      fecha_nac: "1990-01-01",
      telefono: "1234567890",
      direccion_de_habitacion: "Dirección de Habitación 1",
      correo_electronico: "admin1@example.com",
      fecha_ingreso_mppe: "2020-01-01",
      anos_servicio: 5,
      titulo_obtenido: "Título 1",
      codigo_cargo: "C001",
      dependencia_nominal: "Dependencia Nominal 1",
      estatus: "Activo",
      reposo_permiso: "Ninguno",
      inscrito_psuv: "Sí",
      pertenece_movimiento_social: "Sí",
      carnet_patria_codigo: "CP001",
      carnet_patria_serial: "CS001",
      tipo_voto: "Tipo 1",
      centro_votacion: "Centro 1",
      observaciones: "Ninguna",
    },
    {
      cod_cir: "002",
      nombre_circuito: "Circuito 2",
      comuna: "Comuna 2",
      consejo_comunal: "Consejo 2",
      codigo_plantel: "P002",
      codigo_estadistico: "E002",
      codigo_dependencia: "D002",
      nombre_plantel: "Plantel 2",
      direccion_institucion: "Dirección 2",
      nivel_modalidad: "Modalidad 2",
      nombres: "Nombre 2",
      apellidos: "Apellido 2",
      ci: "87654321",
      acarigua: "Acarigua 2",
      fecha_nac: "1985-05-05",
      telefono: "0987654321",
      direccion_de_habitacion: "Dirección de Habitación 2",
      correo_electronico: "admin2@example.com",
      fecha_ingreso_mppe: "2015-05-05",
      anos_servicio: 10,
      titulo_obtenido: "Título 2",
      codigo_cargo: "C002",
      dependencia_nominal: "Dependencia Nominal 2",
      estatus: "Activo",
      reposo_permiso: "Ninguno",
      inscrito_psuv: "Sí",
      pertenece_movimiento_social: "Sí",
      carnet_patria_codigo: "CP002",
      carnet_patria_serial: "CS002",
      tipo_voto: "Tipo 2",
      centro_votacion: "Centro 2",
      observaciones: "Ninguna",
    },
    {
      cod_cir: "003",
      nombre_circuito: "Circuito 3",
      comuna: "Comuna 3",
      consejo_comunal: "Consejo 3",
      codigo_plantel: "P003",
      codigo_estadistico: "E003",
      codigo_dependencia: "D003",
      nombre_plantel: "Plantel 3",
      direccion_institucion: "Dirección 3",
      nivel_modalidad: "Modalidad 3",
      nombres: "Nombre 3",
      apellidos: "Apellido 3",
      ci: "11223344",
      acarigua: "Acarigua 3",
      fecha_nac: "1980-10-10",
      telefono: "1122334455",
      direccion_de_habitacion: "Dirección de Habitación 3",
      correo_electronico: "admin3@example.com",
      fecha_ingreso_mppe: "2010-10-10",
      anos_servicio: 15,
      titulo_obtenido: "Título 3",
      codigo_cargo: "C003",
      dependencia_nominal: "Dependencia Nominal 3",
      estatus: "Activo",
      reposo_permiso: "Ninguno",
      inscrito_psuv: "Sí",
      pertenece_movimiento_social: "Sí",
      carnet_patria_codigo: "CP003",
      carnet_patria_serial: "CS003",
      tipo_voto: "Tipo 3",
      centro_votacion: "Centro 3",
      observaciones: "Ninguna",
    },
    {
      cod_cir: "004",
      nombre_circuito: "Circuito 4",
      comuna: "Comuna 4",
      consejo_comunal: "Consejo 4",
      codigo_plantel: "P004",
      codigo_estadistico: "E004",
      codigo_dependencia: "D004",
      nombre_plantel: "Plantel 4",
      direccion_institucion: "Dirección 4",
      nivel_modalidad: "Modalidad 4",
      nombres: "Nombre 4",
      apellidos: "Apellido 4",
      ci: "55667788",
      acarigua: "Acarigua 4",
      fecha_nac: "1975-07-07",
      telefono: "2233445566",
      direccion_de_habitacion: "Dirección de Habitación 4",
      correo_electronico: "admin4@example.com",
      fecha_ingreso_mppe: "2005-07-07",
      anos_servicio: 20,
      titulo_obtenido: "Título 4",
      codigo_cargo: "C004",
      dependencia_nominal: "Dependencia Nominal 4",
      estatus: "Activo",
      reposo_permiso: "Ninguno",
      inscrito_psuv: "Sí",
      pertenece_movimiento_social: "Sí",
      carnet_patria_codigo: "CP004",
      carnet_patria_serial: "CS004",
      tipo_voto: "Tipo 4",
      centro_votacion: "Centro 4",
      observaciones: "Ninguna",
    },
    {
      cod_cir: "005",
      nombre_circuito: "Circuito 5",
      comuna: "Comuna 5",
      consejo_comunal: "Consejo 5",
      codigo_plantel: "P005",
      codigo_estadistico: "E005",
      codigo_dependencia: "D005",
      nombre_plantel: "Plantel 5",
      direccion_institucion: "Dirección 5",
      nivel_modalidad: "Modalidad 5",
      nombres: "Nombre 5",
      apellidos: "Apellido 5",
      ci: "99887766",
      acarigua: "Acarigua 5",
      fecha_nac: "1970-12-12",
      telefono: "3344556677",
      direccion_de_habitacion: "Dirección de Habitación 5",
      correo_electronico: "admin5@example.com",
      fecha_ingreso_mppe: "2000-12-12",
      anos_servicio: 25,
      titulo_obtenido: "Título 5",
      codigo_cargo: "C005",
      dependencia_nominal: "Dependencia Nominal 5",
      estatus: "Activo",
      reposo_permiso: "Ninguno",
      inscrito_psuv: "Sí",
      pertenece_movimiento_social: "Sí",
      carnet_patria_codigo: "CP005",
      carnet_patria_serial: "CS005",
      tipo_voto: "Tipo 5",
      centro_votacion: "Centro 5",
      observaciones: "Ninguna",
    },
  ];
  try {
    for (const administrativo of fakeAdministrativos) {
      await administrativoService.createAdministrativo(administrativo);
    }
    console.log("Datos ficticios insertados correctamente");
  } catch (error) {
    console.error("Error al insertar datos ficticios:", error);
  }
};

export default fakeAdministrativosData;
