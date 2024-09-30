import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import LayoutTablet from "./LayoutTablet";
import { personalDocente } from "./data/personalDocente";
import columnDefs from "./data/columnDefsDocente";

interface TabletDocenteProps {}

const TabletDocente: React.FC<TabletDocenteProps> = () => {
  const [quickFilterText, setQuickFilterText] = useState<string>("");
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollTop = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startY.current = e.clientY;
    scrollTop.current = tableContainerRef.current?.scrollTop || 0;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    const dy = e.clientY - startY.current;
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollTop = scrollTop.current - dy;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <LayoutTablet>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(e) => setQuickFilterText(e.target.value)}
        />
      </div>
      <div
        className="ag-theme-alpine table-container"
        ref={tableContainerRef}
        onMouseDown={handleMouseDown}
      >
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
