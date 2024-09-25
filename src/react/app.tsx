import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./scss/style.scss";

const root = createRoot(document.body);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
);
