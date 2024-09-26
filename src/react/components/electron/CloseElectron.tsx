import React from "react";
const { ipcRenderer } = window.require("electron");

import { IoMdClose } from "react-icons/io";
import { Icono } from "@nano";

const CloseElectron: React.FC = () => {
  const handleClose = () => {
    ipcRenderer.send("close-window");
  };

  return (
    <div className="electron-btn-closed">
      <button onClick={handleClose}>
        <Icono icono={<IoMdClose />} />
      </button>
    </div>
  );
};

export default CloseElectron;
