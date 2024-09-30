interface TabletObreroProps {}
import { URL_BACKEND } from "@env";
import TabletTrabajador from "@components/tablet/TabletTrabajador";
import React, { useEffect, useState } from "react";

import { obreroPersonal, ObreroPersonal } from "./data/obreroPersonal";
import docenteColumnDefs from "./data/obreroColumnDefs";

const TabletObrero: React.FC<TabletObreroProps> = ({}) => {
  const irAnadirObrero = () => {
    console.log("ir a añadir docente");
  };

  const [docentes, setDocentes] = useState<ObreroPersonal[]>([]);

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const response = await fetch(`${URL_BACKEND}/docente/get`);
        const data = await response.json();
        if (data.type === "success") {
          setDocentes(data.docentes);
        } else {
          console.error("Error al recuperar los datos de los docentes:", data);
        }
      } catch (error) {
        console.error("Error al recuperar los datos de los docentes:", error);
      }
    };

    fetchDocentes();
  }, []);

  const datos = [
    docentes.length > 0 ? docentes : obreroPersonal,
    docenteColumnDefs,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla="docente"
        onClick={irAnadirObrero}
        datos={datos}
      />
    </>
  );
};

export default TabletObrero;
