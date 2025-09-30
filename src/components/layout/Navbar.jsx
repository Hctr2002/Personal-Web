import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function AppNavbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" bg={theme === "light" ? "light" : "dark"} variant={theme}>
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Sobre Mi</Nav.Link>
            <Nav.Link as={Link} to="/skills">Habilidades</Nav.Link>
            <Nav.Link as={Link} to="/projects">Proyectos</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
