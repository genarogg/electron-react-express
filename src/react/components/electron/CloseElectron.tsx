import React from "react";
import { ipcRenderer } from "electron";

interface CloseElectronProps {}

const CloseElectron: React.FC<CloseElectronProps> = () => {
  const handleClose = () => {
    ipcRenderer.send("close-window");
  };

  return <button >Cerrar</button>;
};

export default CloseElectron;
