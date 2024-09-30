import Initial from "./Initial";
import Initial2 from "./Initial2";

// @iconos
import { HiHome } from "react-icons/hi";
import { PiTableThin } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";

import TabletDocente from "./docente/TabletDocente";
import AddDocente from "./docente/crud/AddDocente";

import TabletObrero from "./obreros/TabletObrero";

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
    ],
  },
  {
    titleSecction: "otros",
    elements: [
      {
        component: AddDocente,
        context: "add docente",
        icon: <FaCalendarAlt />,
      },
      {
        component: Initial2,
        context: "datos",
        icon: <FaCalendarAlt />,
      },
    ],
  },
];

export { components };
