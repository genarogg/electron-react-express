import Layout from "./layout/Layout";
interface SimpleDashboardProps {}

const SimpleDashboard: React.FC<SimpleDashboardProps> = () => {
  return (
    <Layout>
      <div className="dashboard simple">
        <h1>Dashboard</h1>
      </div>
    </Layout>
  );
};

export default SimpleDashboard;
