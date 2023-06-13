import React from "react";
import { useState, useEffect } from "react";
import benelli from "../images/benelli.jpg";
import "../styles/objetives.css";
import { data } from "../data/data";

function ObjetivesCard() {
  const [objetives, setObjetives] = useState([]);
  useEffect(() => {
    conseguirObjetivos();
  }, []);
  const conseguirObjetivos = async () => {
    const url = "http://localhost:3900/api/show_objetives";
    let peticion = await fetch(url, {
      method: "GET",
    });
    let datos = await peticion.json();

    if (datos.status === "success") {
      setObjetives(datos.objetivo);
    }
  };
  const separador = (numero) => {
    let parte = numero.toString().split(".");
    parte[0] = parte[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parte.join(".");
  };
  const obtenerPorcentaje = (numero,ahorrado) => {
    let ahorro = ahorrado;
    let porcentaje = (ahorro * 100) / numero;
    if (porcentaje >= 100) {
      return 100;
    }else if(porcentaje <100){
      let porcentajeRecortado = porcentaje.toString().slice(0,5);
      return porcentajeRecortado;
    }
  };
  return (
    <>
      {objetives.map((objetive) => {
        return (
          <div className="objetivesCardMain" key={objetive._id}>
            <div>
              <h6 className="porcentajeObjetivo">
                {obtenerPorcentaje(objetive.cantidad,objetive.ahorrado)}%
              </h6>
              <div className="circleContainer">
                <div
                  className="containerObjetive"
                  style={{
                    "--porcentaje": obtenerPorcentaje(objetive.cantidad,objetive.ahorrado),
                  }}
                >
                  <svg>
                    <circle
                      className="objetiveCircle"
                      r={50}
                      cx={"50%"}
                      cy={"50%"}
                      pathLength={100}
                      b
                    />
                  </svg>
                  <img
                    className="objetiveImage"
                    src={benelli}
                    alt="ImagenLogo"
                  />
                </div>
              </div>
            </div>
            <div className="infoObjetiveContainer">
              <h2 className="tittleObjetive">{objetive.nombre}</h2>
              <p className="infoObjetive">
                {separador(objetive.ahorrado)} / {separador(objetive.cantidad)}{" "}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ObjetivesCard;
