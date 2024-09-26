import Layout from "./layout/Layout";
interface SimpleDashboardProps {}

const SimpleDashboard: React.FC<SimpleDashboardProps> = () => {
  return (
    <Layout>
      <div className="dashboard simple">
        <aside className="aside">
          <p>aside</p>
        </aside>
        <main className="main">
          <header className="header">
            <p>header</p>
          </header>
          <div className="content">
            <p>contenido</p>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default SimpleDashboard;
