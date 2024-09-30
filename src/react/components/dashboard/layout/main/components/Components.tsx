import Initial from "./Initial";
import Initial2 from "./Initial2";

// @iconos
import { HiHome } from "react-icons/hi";
import { PiTableThin } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";

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
    titleSecction: "Tablas",
    elements: [
      {
        component: Initial2,
        context: "mis datos",
        icon: <PiTableThin />,
      },
      {
        component: Initial,
        context: "mis da2tos",
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
        component: Initial2,
        context: "datos",
        icon: <FaCalendarAlt />,
      },
    ],
  },
];

export { components };
