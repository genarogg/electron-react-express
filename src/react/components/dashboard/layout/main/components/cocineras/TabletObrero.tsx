interface TabletObreroProps {}
import { URL_BACKEND } from "@env";
import TabletTrabajador from "@components/tablet/TabletTrabajador";
import React, { useEffect, useState } from "react";

import { obreroPersonal, ObreroPersonal } from "./data/obreroPersonal";
import docenteColumnDefs from "./data/obreroColumnDefs";

const TabletObrero: React.FC<TabletObreroProps> = () => {
  const irAnadirObrero = () => {
    console.log("ir a añadir docente");
  };

  const [obreros, setObreros] = useState<ObreroPersonal[]>([]);

  useEffect(() => {
    const fetchObreros = async () => {
      try {
        const response = await fetch(`${URL_BACKEND}/obrero/get`);
        const data = await response.json();
        if (data.type === "success") {
          setObreros(data.obreros);
        } else {
          console.error("Error al recuperar los datos de los docentes:", data);
        }
      } catch (error) {
        console.error("Error al recuperar los datos de los docentes:", error);
      }
    };

    fetchObreros();
  }, []);

  const datos = [
    obreros.length > 0 ? obreros : obreroPersonal,
    docenteColumnDefs,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla="obreros"
        onClick={irAnadirObrero}
        datos={datos}
        ir={"agregar obrero"}
      />
    </>
  );
};

export default TabletObrero;
