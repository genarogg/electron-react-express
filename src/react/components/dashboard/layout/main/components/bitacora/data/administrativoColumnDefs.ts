import { ColDef, ColGroupDef } from "ag-grid-community";
import { Bitacora } from "./administrativoPersonal";

const bitacoraColumnDefs: (ColDef<Bitacora> | ColGroupDef<Bitacora>)[] = [
  {
    headerName: "ID",
    field: "id",
    width: 100,
  },
  {
    headerName: "Información del Usuario",
    children: [
      { headerName: "Usuario", field: "usuario", filter: true },
      { headerName: "Acción", field: "accion", filter: true },
      { headerName: "Fecha", field: "fecha", filter: true },
      { headerName: "Hora", field: "hora", filter: true },
    ],
  },
];

export default bitacoraColumnDefs;
