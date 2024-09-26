interface LoginProps {}

import LayoutHome from "@layout/LayoutHome";
import { LoginBasic } from "@formSkeleton";
const Login: React.FC<LoginProps> = () => {
  return (
    <LayoutHome>
      <LoginBasic />
    </LayoutHome>
  );
};

export default Login;
