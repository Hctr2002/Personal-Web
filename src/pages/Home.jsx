import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/theme.css";
import profilePic from "../assets/images/Perfil.png";

function Home() {
  const { theme } = useTheme();

  return (
    <div className={`home-content ${theme}`}>
      <header className="container">
        <h1>Héctor Robledo</h1>
        <p>Future FullStack Developer | Tech Enthusiast</p>
      </header>

      <div className={`home-section ${theme}`}>
        <div className={`home-text ${theme}`}>
          <h1>
            El programador es un ser <br /> que convierte café en código
          </h1>
          <p>
            Soy estudiante de programación, apasionado por la tecnología y en
            constante aprendizaje de nuevos lenguajes y herramientas.
          </p>
          <blockquote>
            "Para mí, el desarrollo web es más que codificar; se trata de resolver
            problemas y crear experiencias que hagan la vida de las personas más
            fácil y agradable."
          </blockquote>
        </div>

        <div className={`home-profile`}>
          <img src={profilePic} alt="Héctor Robledo" className="profile-img" />
          <h3>Héctor Robledo</h3>
          <p>22 años</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
