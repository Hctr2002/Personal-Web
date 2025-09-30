import { useTheme } from "../../context/ThemeContext";
import { Container } from "react-bootstrap";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme} text-center py-3 mt-5`}>
      <Container>
        <p className="mb-0">
          © {new Date().getFullYear()} Héctor Robledo | Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
