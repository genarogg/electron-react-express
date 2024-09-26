import LayoutDashboard from "@layout/LayoutDashboard";
interface SimpleDashboardProps {}

const SimpleDashboard: React.FC<SimpleDashboardProps> = () => {
  return (
    <LayoutDashboard>
      <div className="dashboard">
        <h1>Dashboard</h1>
      </div>
    </LayoutDashboard>
  );
};

export default SimpleDashboard;
