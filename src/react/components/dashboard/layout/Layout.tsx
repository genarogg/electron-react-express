import { LayoutElectron } from "@electron";
import { ToastContainer } from "react-toastify";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-dashboard">
      <LayoutElectron title="trotamundos"/>
      {children}
      <ToastContainer />
    </div>
  );
};

export default Layout;
