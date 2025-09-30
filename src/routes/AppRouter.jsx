import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SobreMi from "../pages/SobreMi";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Skills from "../pages/skills"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default AppRouter;
