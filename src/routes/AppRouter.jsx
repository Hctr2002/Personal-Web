import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SobreMi from "../pages/SobreMi";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRouter;
