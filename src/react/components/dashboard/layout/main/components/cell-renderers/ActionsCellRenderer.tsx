import React from "react";
import { DocentePersonal } from "../docente/data/docentePersonal";
import { ObreroPersonal } from "../obreros/data/obreroPersonal";
import { notify } from "@nano";
import { BtnNormalBasic } from "@btn";
import { URL_BACKEND } from "@env";

interface ActionsCellRendererProps {
  data: DocentePersonal | ObreroPersonal;
}

const ActionsCellRenderer: React.FC<ActionsCellRendererProps> = ({ data }) => {
  const handleEdit = (ci: string) => {
    // Lógica para editar el docente
    console.log("Editar docente:", ci);
  };

  const handleDelete = async (ci: string) => {
    try {
      const response = await fetch(`${URL_BACKEND}/usuario/delete/${ci}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        notify({ message: errorData.error, type: "error" });
      }

      const result = await response.json();
      console.log(result.message);
      notify({ message: result.message, type: "success" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-btn-tablet">
      {/* <BtnNormalBasic onClick={() => handleEdit(data.ci)}>
        Editar
      </BtnNormalBasic> */}
      <BtnNormalBasic onClick={() => handleDelete(data.ci)}>
        Eliminar
      </BtnNormalBasic>
    </div>
  );
};

export default ActionsCellRenderer;
