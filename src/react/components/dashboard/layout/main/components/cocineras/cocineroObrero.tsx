interface TabletCocineroProps {}
import { URL_BACKEND } from "@env";
import TabletTrabajador from "@components/tablet/TabletTrabajador";
import React, { useEffect, useState } from "react";

import { CocineroPersonal, cocineroPersonal } from "./data/cocineroPersonal";
import docenteColumnDefs from "./data/cocineroColumnDefs";

const TabletCocinero: React.FC<TabletCocineroProps> = () => {
  const irAnadirObrero = () => {
    console.log("ir a añadir docente");
  };

  const [cocineros, setCocinero] = useState<CocineroPersonal[]>([]);

  useEffect(() => {
    const fetchCocinero = async () => {
      try {
        const response = await fetch(`${URL_BACKEND}/cocinero/get`);
        const data = await response.json();
        if (data.type === "success") {
          setCocinero(data.cocineros);
        } else {
          console.error("Error al recuperar los datos de los docentes:", data);
        }
      } catch (error) {
        console.error("Error al recuperar los datos de los docentes:", error);
      }
    };

    fetchCocinero();
  }, []);

  const datos = [
    cocineros.length > 0 ? cocineros : cocineroPersonal,
    docenteColumnDefs,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla="cocineros"
        onClick={irAnadirObrero}
        datos={datos}
        ir={"agregar cocinero"}
      />
    </>
  );
};

export default TabletCocinero;
