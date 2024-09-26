import HeaderElectron from "./HeaderElectron";
import { ToastContainer } from "react-toastify";

interface LayoutElectronProps {
  children: React.ReactNode;
  title?: string;
}

const LayoutElectron: React.FC<LayoutElectronProps> = ({
  children,
  title = "Electron app",
}) => {
  return (
    <>
      <div className="container-dashboard">
        <HeaderElectron title={title} />
        {children}
        <ToastContainer />
      </div>
    </>
  );
};

export default LayoutElectron;
