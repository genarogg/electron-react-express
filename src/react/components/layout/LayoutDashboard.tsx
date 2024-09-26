import HeaderElectron from "../electron/HeaderElectron";
import { ToastContainer } from "react-toastify";

interface LayoutDashboardProps {
  children: React.ReactNode;
}

const LayoutDashboard: React.FC<LayoutDashboardProps> = ({ children }) => {
  return (
    <>
      <div className="container-dashboard">
        {" "}
        <HeaderElectron />
        {children}
        <ToastContainer />
      </div>
    </>
  );
};

export default LayoutDashboard;
