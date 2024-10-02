import moment from "moment";
import {
  docenteService,
  obreroService,
  administrativoService,
  cocineroService,
  asistenciaPersonalService,
} from "../../models";

// Función para generar registros de asistencia
export const generateAsistencia = async () => {
  try {
    // Obtener todos los usuarios (docentes, obreros, administrativos, cocineros)
    const docentes = await docenteService.getAllDocentes();
    const obreros = await obreroService.getAllObreros();
    const administrativos = await administrativoService.getAllAdministrativos();
    const cocineros = await cocineroService.getAllCocineros();

    // Combinar todos los usuarios en un solo arreglo
    const users = [...docentes, ...obreros, ...administrativos, ...cocineros];

    for (const user of users) {
      const { id: personal_id, nombres, apellidos, ci } = user;

      // Obtener la fecha y hora actual del sistema
      const fecha = moment().format("YYYY-MM-DD");
      const hora_entrada = "00:00:00";
      // Crear la asistencia personal

      await asistenciaPersonalService.createAsistenciaPersonal({
        personal_id,
        nombres,
        apellidos,
        ci,
        fecha,
        hora_entrada,
      });
    }

    console.log("Registros de asistencia generados correctamente");
  } catch (error) {
    console.error("Error al generar registros de asistencia:", error);
  }
};

const asistencia = async () => {
  try {
    const ultimoRegistro = await asistenciaPersonalService.getLastAsistenciaPersonal();

    const fechaHoy = moment().format("YYYY-MM-DD");

    if (ultimoRegistro && ultimoRegistro.fecha === fechaHoy) {
      console.log("La asistencia ya ha sido generada para el día de hoy.");
      return;
    }

    generateAsistencia();
  } catch (error) {
    console.error(
      "Error al obtener el último registro de asistencia personal:",
      error
    );
  }
};

export default asistencia;
