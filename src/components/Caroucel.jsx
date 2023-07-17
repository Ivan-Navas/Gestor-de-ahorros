import React from "react";
import '../styles/objetives.css'
import OneObjetiveCard from './OneObjetiveCard'
import "../styles/caroucel.css";

function Caroucel() {

  //TODO agregar objetivos en forma de carrucel
  return (
    <div className="caroucelMain">
      <OneObjetiveCard />
    </div>
  );
}

export default Caroucel;
