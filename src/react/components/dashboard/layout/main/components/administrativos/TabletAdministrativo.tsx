interface TabletAdministrativoProps {}
import { URL_BACKEND } from "@env";
import TabletTrabajador from "@components/tablet/TabletTrabajador";
import React, { useEffect, useState } from "react";

import { administrativoPersonal, AdministrativoPersonal } from "./data/administrativoPersonal";
import docenteColumnDefs from "./data/administrativoColumnDefs";

const TabletAdministrativo: React.FC<TabletAdministrativoProps> = () => {
  const irAnadirObrero = () => {
    console.log("ir a añadir docente");
  };

  const [Administrativo, setAdministrativo] = useState<AdministrativoPersonal[]>([]);

  useEffect(() => {
    const fetchAdministrativo = async () => {
      try {
        const response = await fetch(`${URL_BACKEND}/administrativo/get`);
        const data = await response.json();
        if (data.type === "success") {
          setAdministrativo(data.administrativos);
        } else {
          console.error("Error al recuperar los datos de los docentes:", data);
        }
      } catch (error) {
        console.error("Error al recuperar los datos de los docentes:", error);
      }
    };

    fetchAdministrativo();
  }, []);

  const datos = [
    Administrativo.length > 0 ? Administrativo : administrativoPersonal,
    docenteColumnDefs,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla="Administrativo"
        onClick={irAnadirObrero}
        datos={datos}
        ir={"agregar administrativo"}
      />
    </>
  );
};

export default TabletAdministrativo;
