import moment from "moment";
import {
  docenteService,
  obreroService,
  administrativoService,
  cocineroService,
  asistenciaPersonalService,
} from "../../models";

// Función para generar registros de asistencia
const generateAsistencia = async () => {
  try {
    // Obtener todos los usuarios (docentes, obreros, administrativos, cocineros)
    const docentes = await docenteService.getAllDocentes();
    const obreros = await obreroService.getAllObreros();
    const administrativos = await administrativoService.getAllAdministrativos();
    const cocineros = await cocineroService.getAllCocineros();

    // Combinar todos los usuarios en un solo arreglo
    const users = [...docentes, ...obreros, ...administrativos, ...cocineros];

    for (const user of users) {
      const { personal_id, nombres, apellidos, ci } = user;

      // Obtener la fecha y hora actual del sistema
      const fecha = moment().format("YYYY-MM-DD");

      // Crear la asistencia personal
      await asistenciaPersonalService.createAsistenciaPersonal({
        personal_id,
        nombres,
        apellidos,
        ci,
        fecha,
      });
    }

    console.log("Registros de asistencia generados correctamente");
  } catch (error) {
    console.error("Error al generar registros de asistencia:", error);
  }
};



export default generateAsistencia;
