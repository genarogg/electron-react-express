interface TabletDocenteProps {}
import TabletTrabajador from "@components/tablet/TabletTrabajador";

import { docentePersonal } from "./data/docentePersonal";
import docenteColumnDefs from "./data/docenteColumnDefs";

const TabletDocente: React.FC<TabletDocenteProps> = ({}) => {
  const irAnadirDocente = () => {
    console.log("ir a añadir docente");
  };

  const datos = [docentePersonal, docenteColumnDefs];
  return (
    <>
      <TabletTrabajador
        nameTabla="docente"
        onClick={irAnadirDocente}
        datos={datos}
      />
    </>
  );
};

export default TabletDocente;
