import LayoutSimpleDB from "../components/dashboard/layout/LayoutSimpleDB";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <LayoutSimpleDB>
      <h1>Dashboard Page</h1>
    </LayoutSimpleDB>
  );
};

export default Dashboard;
