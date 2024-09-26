import React from "react";
const { ipcRenderer } = window.require("electron");

interface HeaderElectronProps {}

const HeaderElectron: React.FC<HeaderElectronProps> = () => {
  const minimizeWindow = () => {
    ipcRenderer.send("minimize-window");
  };

  const maximizeWindow = () => {
    ipcRenderer.send("maximize-window");
  };

  const closeWindow = () => {
    ipcRenderer.send("close-window");
  };

  return (
    <div className="header-electron">
      <button onClick={minimizeWindow}>Minimizar</button>
      <button onClick={maximizeWindow}>Maximizar</button>
      <button onClick={closeWindow}>Cerrar</button>
    </div>
  );
};

export default HeaderElectron;
