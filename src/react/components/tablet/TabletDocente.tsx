import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import LayoutTablet from "./LayoutTablet";
import { personalDocente } from "./data/personalDocente";
import columnDefs from "./data/columnDefsDocente";

interface TabletDocenteProps {}

const TabletDocente: React.FC<TabletDocenteProps> = () => {
  const [quickFilterText, setQuickFilterText] = useState<string>("");

  return (
    <LayoutTablet>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => setQuickFilterText(e.target.value)}
        />
      </div>
      <div className="ag-theme-alpine table-container">
        <AgGridReact
          rowData={personalDocente}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={30}
          domLayout="normal"
          quickFilterText={quickFilterText}
        />
      </div>
    </LayoutTablet>
  );
};

export default TabletDocente;
