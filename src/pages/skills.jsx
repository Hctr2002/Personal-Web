import { useTheme } from "../context/ThemeContext";
import "../styles/theme.css";

function Skills() {
  const { theme } = useTheme();

  return (
    <div className={`skills-page ${theme}`}>
      <main>
        <section id="profile-summary" className="about-me profile-summary-futuristic">
          <div className="profile-gif">
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="Héctor Robledo GIF"
              className="profile-photo"
              style={{ borderRadius: "8px" }}
            />
          </div>

          <div className="about-text">
            <p className="description">
              Mis principales habilidades se centran
              en el desarrollo de back-end y la resolución de problemas.
            </p>

            <div className="code-block">
              <pre>
                <code>
{`const Hctr2002 = {
  pronouns: "He/Him",
  code: [Python, SQL, Java, C, HTML, CSS, JavaScript],
  tools: [Spring Boot, Git, GitHub, VSCode, SQLdeveloper, APIs REST]
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section id="tech-skills" className="skills-section">
          <h2 className="section-title">Tecnologías y Herramientas</h2>
          <div className="badges-container">
            <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
            <img src="https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin" />
            <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
            <img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" alt="Oracle" />
          </div>

          <div className="most-used-langs">
            <h3 className="section-subtitle">Lenguajes más usados</h3>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Hctr2002&layout=compact&theme=radical"
              alt="Lenguajes más usados en GitHub"
            />
          </div>
        </section>

        <section id="learning" className="learning-section">
          <h2 className="section-title">Aprendiendo actualmente</h2>
          <ul>
            <li>Docker 🐳</li>
            <li>Kubernetes ☸️</li>
            <li>Microservicios</li>
            <li>Kotlin, JavaScript, PL/SQL, React, Nodejs</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Skills;
