import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./scss/style.scss";


import Provider from "@provider";

const root = createRoot(document.body);
// root.render(
//   <Provider>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   </Provider>
// );

root.render(
  <Provider>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  </Provider>
);
