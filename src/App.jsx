import AppNavbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRouter from "./routes/AppRouter";
import { useTheme } from "./context/ThemeContext";
import "./styles/theme.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <AppNavbar />
      <div className="container mt-4">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
