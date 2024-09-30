import { GlobalStateContext } from "@redux";

import AsideSimple from "./aside/AsideSimple";
import { useContext } from "react";
import HeaderSimpleDB from "./header/HeaderSimpleDB";

import MainSimple from "./main/MainSimple";

interface LayoutSimpleDBProps {
  children: React.ReactNode;
}

const LayoutSimpleDB: React.FC<LayoutSimpleDBProps> = ({ children }) => {
  const { state } = useContext(GlobalStateContext);

  return (
    <>
      <div className={`simple-db ${state.active_aside ? "aside-active" : ""}`}>
        <AsideSimple />
        <div className="container-simple">
          <HeaderSimpleDB />
          <main className="main-simple">
            <MainSimple />
          </main>
        </div>
      </div>
      {/* <footer className="footer-simple">Footer</footer> */}
    </>
  );
};

export default LayoutSimpleDB;
