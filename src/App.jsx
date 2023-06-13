import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Graphics from "./components/Graphics";
import Caroucel from "./components/caroucel";
import Options from "./components/Options";
import Objetives from "./components/Objetives";
import ModalAddObjetive from "./components/ModalAddObjetive";

function App() {
  return (
    <>
      <div className="appMainContainer">
        <div className="containermain">
          <Logo />
          <div className="containerOver">
            <Options />
            <Caroucel />
          </div>
        </div>
        <div className="graphicsContainer">
          <Graphics
            titulo="Dinero Total"
            porcentaje="57.85"
            cantidad="17.159.000"
            total="29.659.000"
          />
          <Graphics
            titulo="Todos los objetivos"
            porcentaje="25"
            cantidad="1"
            total="4"
          />
        </div>
        <div className="objetivesMainContainer">
          <Objetives />
        </div>
      </div>
      {/* <ModalAddObjetive/> */}
    </>
  );
}

export default App;
