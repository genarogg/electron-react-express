import React from "react";
const { ipcRenderer } = window.require("electron");

interface HeaderElectronProps {
  title: string;
}

const HeaderElectron: React.FC<HeaderElectronProps> = ({ title }) => {
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
      <div className="container-title">
        <h1>{title}</h1>
      </div>
      <div className="container-btns">
        <button onClick={minimizeWindow} className="minimize"></button>
        <button onClick={maximizeWindow} className="maximize"></button>
        <button onClick={closeWindow} className="close"></button>
      </div>
    </div>
  );
};

export default HeaderElectron;
