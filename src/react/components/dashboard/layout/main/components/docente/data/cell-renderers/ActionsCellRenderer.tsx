import React from "react";
import { DocentePersonal } from "../docentePersonal";

interface ActionsCellRendererProps {
  data: DocentePersonal;
}

const ActionsCellRenderer: React.FC<ActionsCellRendererProps> = ({ data }) => {
  const handleEdit = (id: number) => {
    // Lógica para editar el docente
    console.log("Editar docente:", id);
  };

  const handleDelete = (id: number) => {
    // Lógica para eliminar el docente
    console.log("Eliminar docente con ID:", id);
  };

  return (
    <div className="container-btn-tablet">
      <button onClick={() => handleEdit(data.id)}>Editar</button>
      <button onClick={() => handleDelete(data.id)}>Eliminar</button>
    </div>
  );
};

export default ActionsCellRenderer;
