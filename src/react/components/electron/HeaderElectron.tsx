import React from "react";
const { ipcRenderer } = window.require("electron");

import { IoClose } from "react-icons/io5";
import { BsCopy } from "react-icons/bs";
import { FaRegWindowMinimize } from "react-icons/fa";
import { Icono } from "@nano";

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
      <div className="container-btns">
        <button onClick={minimizeWindow} className="minimize">
          {/* <Icono icono={<FaRegWindowMinimize />} /> */}
        </button>
        <button onClick={maximizeWindow} className="maximize">
          {/* <Icono icono={<BsCopy />} /> */}
        </button>
        <button onClick={closeWindow} className="close">
          {/* <Icono icono={<IoClose />} /> */}
        </button>
      </div>
    </div>
  );
};

export default HeaderElectron;
