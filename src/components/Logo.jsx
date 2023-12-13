import React from "react";
import "../styles/logo.css";

function Logo() {
  return (
    <div className="LogoMain">
      <div className="containerLogo">
        <img className="imageLogo" src="https://res.cloudinary.com/ivannavas/image/upload/v1702505195/GestorDeAhorros/Documentacion/logo_jxwlsb.png" alt="Logo" />
      </div>
      <div className="containerText">
        <h2 className="titlePage">Gestor de ahorros</h2>
      </div>
    </div>
  );
}

export default Logo;
