interface TabletBitacoraProps {}
import { URL_BACKEND } from "@env";
import TabletTrabajador from "@components/tablet/TabletTrabajador";
import React, { useEffect, useState } from "react";

import { Bitacora, bitacora } from "./data/administrativoPersonal";
import docenteColumnDefs from "./data/administrativoColumnDefs";

const TabletBitacora: React.FC<TabletBitacoraProps> = () => {
  const irAnadirObrero = () => {
    console.log("ir a añadir docente");
  };

  const [bitacora, setBitacora] = useState<Bitacora[]>([]);

  useEffect(() => {
    const fetchBitacora = async () => {
      try {
        const response = await fetch(`${URL_BACKEND}/bitacora`);
        const data = await response.json();
        if (data.type === "success") {
          setBitacora(data.bitacora);
        } else {
          console.error("Error al recuperar los datos de los docentes:", data);
        }
      } catch (error) {
        console.error("Error al recuperar los datos de los docentes:", error);
      }
    };

    fetchBitacora();
  }, []);

  const datos = [
    bitacora.length > 0 ? bitacora : bitacora,
    docenteColumnDefs,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla="bitacora"
        onClick={irAnadirObrero}
        datos={datos}
        ir={"bitacora"}
      />
    </>
  );
};

export default TabletBitacora;
