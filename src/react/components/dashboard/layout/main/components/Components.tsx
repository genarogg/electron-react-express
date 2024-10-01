import Initial from "./Initial";
import Initial2 from "./Initial2";

// @iconos
import { HiHome } from "react-icons/hi";
import { PiTableThin } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";

import TabletDocente from "./docente/TabletDocente";
import AddDocente from "./docente/crud/AddDocente";

import TabletObrero from "./obreros/TabletObrero";
import AddObrero from "./obreros/crud/AddObrero";

import TabletAdministrativo from "./administrativos/TabletAdministrativo";
import AddAdministrativo from "./administrativos/crud/AddAdministrativo";

import TabletCocinero from "./cocineras/cocineroObrero";
import AddCocinero from "./cocineras/crud/AddCocineros";

import AsistenciaTabla from "./asistencia/AsistenciaTabla";
import AddAsistencia from "./asistencia/crud/AddAsistencia";

const components = [
  {
    titleSecction: "inicio",
    elements: [
      {
        component: Initial,
        context: "Inicio",
        icon: <HiHome />,
      },
    ],
  },
  {
    titleSecction: "Empleados",
    elements: [
      {
        component: TabletDocente,
        context: "docentes",
        icon: <PiTableThin />,
      },

      {
        component: TabletObrero,
        context: "obreros",
        icon: <PiTableThin />,
      },
      {
        component: TabletAdministrativo,
        context: "administrativos",
        icon: <PiTableThin />,
      },
      {
        component: TabletCocinero,
        context: "cocineros",
        icon: <PiTableThin />,
      },
    ],
  },
  {
    titleSecction: "bitacora",
    elements: [
      {
        component: Initial2,
        context: "bitacora",
        icon: <FaCalendarAlt />,
      },
      {
        component: AsistenciaTabla,
        context: "Asistencia",
        icon: <FaCalendarAlt />,
      },
    ],
  },
  {
    titleSecction: "otros",
    elements: [
      {
        component: AddDocente,
        context: "agregar docente",
        icon: <FaCalendarAlt />,
      },
      {
        component: AddObrero,
        context: "agregar obrero",
        icon: <FaCalendarAlt />,
      },
      {
        component: AddAdministrativo,
        context: "agregar administrativo",
        icon: <FaCalendarAlt />,
      },
      {
        component: AddCocinero,
        context: "agregar cocinero",
        icon: <FaCalendarAlt />,
      },
      {
        component: AddAsistencia,
        context: "Asistencia",
        icon: <FaCalendarAlt />,
      },
    ],
  },
];

export { components };
