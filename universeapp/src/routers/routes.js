import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Captura } from "../pages/Captura";
import { Consolidado } from "../pages/Consolidado";
export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/captura" element={<Captura />} />
      <Route path="/consolidado" element={<Consolidado />} />
    </Routes>
  );
}
