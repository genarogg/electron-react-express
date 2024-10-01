import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import LayoutTablet from "./LayoutTablet";
import { BtnNormalBasic } from "@btn";

import { useSimpleNav } from "@components/state/useSimpleNav";

interface TabletTrabajadorProps {
  nameTabla: string;
  onClick: () => void;
  datos: any;
  ir: string;
  subname?: string;
}

const TabletTrabajador: React.FC<TabletTrabajadorProps> = ({
  nameTabla,
  subname = "añadir un",
  onClick,
  datos,
  ir,
}) => {
  const { state, selectedContext, handleChangeContext } = useSimpleNav();
  const [quickFilterText, setQuickFilterText] = useState<string>("");

  const combinedFunction = () => {
    onClick();
    handleChangeContext(ir, state.context);
  };

  return (
    <LayoutTablet>
      <div className={`container-header-tablet ${nameTabla}`}>
        <BtnNormalBasic onClick={combinedFunction}>
          <span>
            {subname} {nameTabla}
          </span>
        </BtnNormalBasic>
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => setQuickFilterText(e.target.value)}
        />
      </div>
      <div className="ag-theme-alpine table-container">
        <AgGridReact
          rowData={datos[0].reverse()}
          columnDefs={datos[1]}
          pagination={true}
          paginationPageSize={30}
          //   domLayout="normal"
          quickFilterText={quickFilterText}
        />
      </div>
    </LayoutTablet>
  );
};

export default TabletTrabajador;
