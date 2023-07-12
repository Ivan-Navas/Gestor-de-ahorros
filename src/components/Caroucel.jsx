import React, { useContext } from "react";
import '../styles/objetives.css'
import { Context } from "../Context/Context";
import OneObjetiveCard from './OneObjetiveCard'
import "../styles/caroucel.css";

function Caroucel() {
  const contextCaroucel = useContext(Context);
  //TODO agregar objetivos en forma de carrucel
  return (
    <div className="caroucelMain">
      <h2 className="titleCaroucel">Objetivo reciente</h2>
      {/* <OneObjetiveCard/> */}
    </div>
  );
}

export default Caroucel;
