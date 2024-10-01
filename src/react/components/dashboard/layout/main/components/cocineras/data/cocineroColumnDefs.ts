import { ColDef, ColGroupDef } from "ag-grid-community";
import { CocineroPersonal } from "./cocineroPersonal";
import ActionsCellRenderer from "../../cell-renderers/ActionsCellRenderer";

const cocineroColumnDefs: (
  | ColDef<CocineroPersonal>
  | ColGroupDef<CocineroPersonal>
)[] = [
  {
    headerName: "ID",
    field: "id",
    width: 100,
  },
  {
    headerName: "Datos del plante",
    children: [
      { headerName: "CÓD-CIR", field: "cod_cir", filter: true },
      {
        headerName: "NOMBRE DEL CIRCUITO",
        field: "nombre_circuito",
        filter: true,
      },
      { headerName: "COMUNA", field: "comuna", filter: true },
      {
        headerName: "CONSEJO COMUNAL AL CUAL PERTENECE",
        field: "consejo_comunal",
        filter: true,
      },
      { headerName: "CÓDIGO PLANTEL", field: "codigo_plantel", filter: true },
      {
        headerName: "CÓDIGO ESTADÍSTICO",
        field: "codigo_estadistico",
        filter: true,
      },
      {
        headerName: "CÓDIGO DEPENDENCIA",
        field: "codigo_dependencia",
        filter: true,
      },
      {
        headerName: "NOMBRE DEL PLANTEL",
        field: "nombre_plantel",
        filter: true,
      },
      {
        headerName: "DIRECCION DE LA INSTITUCION",
        field: "direccion_institucion",
        filter: true,
      },

      {
        headerName: "NIVEL O MODALIDAD",
        field: "nivel_modalidad",
        filter: true,
      },
    ],
  },
  {
    headerName: "DATOS DEL PERSONAL OBRERO",
    children: [
      { headerName: "NOMBRES", field: "nombres", filter: true },
      { headerName: "APELLIDOS", field: "apellidos", filter: true },
      { headerName: "C.I", field: "ci", filter: true },
      {
        headerName: "FECHA DE NAC. (DD/MM/AA)",
        field: "fecha_nac",
        filter: true,
      },
      { headerName: "TELÉFONO", field: "telefono", filter: true },
      {
        headerName: "DIRECCIÓN DE HABITACIÓN",
        field: "direccion_de_habitacion",
        filter: true,
      },
      {
        headerName: "CORREO ELECTRÓNICO",
        field: "correo_electronico",
        filter: true,
      },
      {
        headerName: "FECHA DE INGRESO MPPE",
        field: "fecha_ingreso_mppe",
        filter: true,
      },
      { headerName: "AÑOS DE SERVICIO", field: "anos_servicio", filter: true },
      {
        headerName: "TÍTULO OBTENIDO",
        field: "titulo_obtenido",
        filter: true,
      },

      {
        headerName: "CÓDIGO / CARGO (SEGÚN RECIBO DE PAGO)",
        field: "codigo_cargo",
        filter: true,
      },
      {
        headerName: "DEPENDENCIA NOMINAL / CODIGO (SEGÚN RECIBO DE PAGO)",
        field: "dependencia_nominal",
        filter: true,
      },

      {
        headerName: "ESTATUS (ACTIVO - INACTIVO)",
        field: "estatus",
        filter: true,
      },
      {
        headerName:
          "REPOSO O PERMISO MÉDICO - ABANDONOS ENTRE OTROS (DESDE - HASTA)",
        field: "reposo_permiso",
        filter: true,
      },
    ],
  },
  {
    headerName: "Inscripción en el PSUV",
    children: [
      {
        headerName: "INSCRITO EN EL PSUV",
        field: "inscrito_psuv",
        filter: true,
      },
    ],
  },
  {
    headerName: "Movimiento Social",
    children: [
      {
        headerName: "PERTENECE A ALGUN MOVIMIENTO SOCIAL",
        field: "pertenece_movimiento_social",
        filter: true,
      },
    ],
  },
  {
    headerName: "Carnet Patria",
    children: [
      { headerName: "N. CODIGO", field: "carnet_patria_codigo", filter: true },
      { headerName: "N. SERIAL", field: "carnet_patria_serial", filter: true },
    ],
  },
  {
    headerName: "Tipo de Voto",
    children: [
      {
        headerName: "NOMBRE DEL CENTRO DE VOTACION",
        field: "centro_votacion",
        filter: true,
      },
      { headerName: "TIPO DE VOTO", field: "tipo_voto", filter: true },
    ],
  },
  {
    headerName: "Observaciones",
    children: [
      { headerName: "OBSERVACIONES", field: "observaciones", filter: true },
    ],
  },
  {
    headerName: "Acciones",
    cellRenderer: (params: any) => {
      return ActionsCellRenderer(params);
    },
  },
];

export default cocineroColumnDefs;
