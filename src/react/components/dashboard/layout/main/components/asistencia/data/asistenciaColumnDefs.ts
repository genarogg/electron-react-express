import { ColDef, ColGroupDef } from "ag-grid-community";
import { AsistenciaPersonal } from "./asistenciaPersonal";

const asistenciaColumnDefs: (
  | ColDef<AsistenciaPersonal>
  | ColGroupDef<AsistenciaPersonal>
)[] = [
  {
    headerName: "ID",
    field: "id",
    width: 100,
  },
  {
    headerName: "Personal ID",
    field: "personal_id",
    filter: true,
    width: 150,
  },
  {
    headerName: "Nombres",
    field: "nombres",
    filter: true,
    width: 150,
  },
  {
    headerName: "Apellidos",
    field: "apellidos",
    filter: true,
    width: 150,
  },
  {
    headerName: "CI",
    field: "ci",
    filter: true,
    width: 150,
  },
  {
    headerName: "Fecha",
    field: "fecha",
    filter: true,
    width: 150,
  },
  {
    headerName: "Hora de Entrada",
    field: "hora_entrada",
    filter: true,
    width: 150,
  },
  {
    headerName: "Vino",
    field: "vino",
    filter: true,
    width: 150,
  },
];

export default asistenciaColumnDefs;
