import { useTheme } from "../../context/ThemeContext";
import { Container } from "react-bootstrap";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme} text-center py-3 mt-5`}>
      <Container>
        <div className="social-icons mb-2">
          <a href="https://github.com/Hctr2002" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="mailto:hectorrobledo2332@gmail.com" aria-label="Gmail">
            <SiGmail size={24} />
          </a>
          <a href="https://instagram.com/_hctr.r_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://youtube.com/@spoytech" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube size={24} />
          </a>
        </div>

        <p className="mb-0">
          © {new Date().getFullYear()} Héctor Robledo | Todos los derechos reservados
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
