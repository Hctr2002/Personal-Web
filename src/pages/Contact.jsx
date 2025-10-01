import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/theme.css";

function Contact() {
  const { theme } = useTheme();

  return (
    <div className={`contact-page ${theme}`}>
      <main className="contact-main">
        <section className="contact-section">
          <h2 className="section-title">Contáctame</h2>
          <p className="section-description">
            Si tienes alguna duda o proyecto en mente, ¡no dudes en escribirme!
          </p>

          <form action="https://formsubmit.co/hectorrobledo2332@gmail.com" method="POST" className="contact-form">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="tu@email.com" required />

            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje..." required></textarea>

            <button type="submit" className="contact-btn">Enviar</button>
          </form>

          <div className="social-icons">
            <a href="https://github.com/Hctr2002" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:hectorrobledo2332@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
            <a href="https://www.instagram.com/_hctr.r_" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/channel/UC-CtZmhp23mFy4gmtXCATKw" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
