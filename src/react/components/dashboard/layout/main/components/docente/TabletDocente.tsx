interface TabletDocenteProps {}
import { URL_BACKEND } from "@env";
import TabletTrabajador from "@components/tablet/TabletTrabajador";
import React, { useEffect, useState } from "react";

import { docentePersonal, DocentePersonal } from "./data/docentePersonal";
import docenteColumnDefs from "./data/docenteColumnDefs";

const TabletDocente: React.FC<TabletDocenteProps> = ({}) => {
  const irAnadirDocente = () => {
    console.log("ir a añadir docente");
  };

  const [docentes, setDocentes] = useState<DocentePersonal[]>([]);

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
    docentes.length > 0 ? docentes : docentePersonal,
    docenteColumnDefs,
  ];

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
