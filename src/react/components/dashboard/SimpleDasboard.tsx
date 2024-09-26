import { useState } from "react";
import Layout from "./layout/Layout";

import ImgLogo from "../../img/ImgLogo";

interface SimpleDashboardProps {}

const SimpleDashboard: React.FC<SimpleDashboardProps> = () => {
  const LogoText = ({ texto, subtext }: any) => {
    return (
      <div className="logo text">
        <div className="container-img">
          <ImgLogo />
        </div>
        <div className="container-text">
          <span>{texto}</span>
          {subtext && <span>{subtext}</span>}
        </div>
      </div>
    );
  };

  const [state, setState] = useState({});

  return (
    <Layout>
      <div className="dashboard simple">
        <aside className="aside  internal-padding">
          <div className="internal-aside card ">
            <LogoText texto="e.t. ademar" subtext="vazquez sanchez" />
          </div>
        </aside>
        <main className="main internal-padding">
          <header className="header ">
            <div className="internal-header card">
              <p>header</p>
            </div>
          </header>
          <div className="content  ">
            <div className="internal-content card ">
              <p>contenido</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default SimpleDashboard;
