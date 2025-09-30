import AppNavbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRouter from "./routes/AppRouter";
import { useTheme } from "./context/ThemeContext";
import "./styles/theme.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`home-content ${theme}`}>
      <AppNavbar />
      <main className="container mt-4" style={{ flex: 1 }}>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}


export default App;
