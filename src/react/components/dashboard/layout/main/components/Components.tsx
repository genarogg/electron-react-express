import Initial from "./Initial";
import Initial2 from "./Initial2";

// @iconos
import { HiHome } from "react-icons/hi";
import { PiTableThin } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr"
import { PiChefHatBold } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";
import TabletDocente from "./docente/TabletDocente";
import AddDocente from "./docente/crud/AddDocente";
import { FaUsersLine } from "react-icons/fa6";
import TabletObrero from "./obreros/TabletObrero";
import AddObrero from "./obreros/crud/AddObrero";
import { MdOutlineUpdate } from "react-icons/md";
import TabletAdministrativo from "./administrativos/TabletAdministrativo";
import AddAdministrativo from "./administrativos/crud/AddAdministrativo";

import TabletCocinero from "./cocineras/cocineroObrero";
import AddCocinero from "./cocineras/crud/AddCocineros";

import AsistenciaTabla from "./asistencia/AsistenciaTabla";
import AddAsistencia from "./asistencia/crud/AddAsistencia";
import { TbCheckupList } from "react-icons/tb";
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
        icon: <PiStudentBold />,
      },

      {
        component: TabletObrero,
        context: "obreros",
        icon: <GrUserWorker />,
      },
      {
        component: TabletAdministrativo,
        context: "administrativos",
        icon: <FaUsersLine />,
      },
      {
        component: TabletCocinero,
        context: "cocineros",
        icon: <PiChefHatBold />,
      },
    ],
  },
  {
    titleSecction: "bitacora",
    elements: [
      {
        component: Initial2,
        context: "bitacora",
        icon: <MdOutlineUpdate />,
      },
      {
        component: AsistenciaTabla,
        context: "Asistencia",
        icon: <TbCheckupList />,
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
      /* {
        component: AddAsistencia,
        context: "Asistencia",
        icon: <FaCalendarAlt />,
      }, */
    ],
  },
];

export { components };
