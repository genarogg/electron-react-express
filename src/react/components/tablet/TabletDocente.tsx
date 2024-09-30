import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import LayoutTablet from "./LayoutTablet";
import { docentePersonal } from "./data/docentePersonal";
import docenteColumnDefs from "./data/docenteColumnDefs";

import { BtnNormalBasic } from "@btn";

interface TabletDocenteProps {}

const TabletDocente: React.FC<TabletDocenteProps> = () => {
  const [quickFilterText, setQuickFilterText] = useState<string>("");

  return (
    <LayoutTablet>
      <div className="container-header-tablet">
        <BtnNormalBasic>
          <span>añadir un docente</span>
        </BtnNormalBasic>
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => setQuickFilterText(e.target.value)}
        />
      </div>
      <div className="ag-theme-alpine table-container">
        <AgGridReact
          rowData={docentePersonal}
          columnDefs={docenteColumnDefs}
          pagination={true}
          paginationPageSize={30}
          //   domLayout="normal"
          quickFilterText={quickFilterText}
        />
      </div>
    </LayoutTablet>
  );
};

export default TabletDocente;
