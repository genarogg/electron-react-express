import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./react/pages/Login";
// import "./styles.scss"; // Importa tu archivo SCSS

const root = createRoot(document.body);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
);
