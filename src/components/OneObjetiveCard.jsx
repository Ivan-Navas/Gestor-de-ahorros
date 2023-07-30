import React, { useContext, useEffect } from "react";
import { Context } from "../Context/Context";
import "../styles/caroucel.css";

function OneObjetiveCard() {
  const contextOneCard = useContext(Context);

  const objetive =
    contextOneCard.objetives[contextOneCard.objetives.length - 1];

  return (
    <>
    <h2 className="titleCaroucel">Objetivo reciente</h2>
      {objetive ? (
        <div className="oneObjtiveContainer" key={objetive._id}>
        
          <div>
            <h6 className="porcentajeOneProduct">
              {contextOneCard.obtenerPorcentaje(
                objetive.cantidad,
                objetive.ahorrado
              )}
              %
            </h6>
            <div className="containerOneObjetive">
              <div
                className="objetiveOneCircle"
                style={{
                  "--porcentaje": contextOneCard.obtenerPorcentaje(
                    objetive.cantidad,
                    objetive.ahorrado
                  ),
                }}
              >
                <svg>
                  <circle
                    className="circleneObjetive"
                    r={"50"}
                    cx={"50%"}
                    cy={"50%"}
                    pathLength={100}
                  />
                  <circle
                    className="circleOneObjetive2"
                    r={"50"}
                    cx={"50%"}
                    cy={"50%"}
                    pathLength={100}
                  />
                  |
                </svg>
                {objetive.imagen !=
                  "https://res.cloudinary.com/ivannavas/image/upload/v1688963066/GestorDeAhorros/logo_xe6pbu.png" && (
                  <img
                    className="objetiveImage"
                    src={"http://localhost:3900/api/imagen/" + objetive.imagen}
                    alt="logoImagen"
                  />
                )}
                {objetive.imagen ==
                  "https://res.cloudinary.com/ivannavas/image/upload/v1688963066/GestorDeAhorros/logo_xe6pbu.png" && (
                  <img
                    className="objetiveImage"
                    src={objetive.imagen}
                    alt="logoImagen"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="infoOneObjetiveContainer">
            <h2 className="nameOneObjetive">{objetive.nombre}</h2>
            <p className="infoOneObjetive">
              {contextOneCard.separador(objetive.ahorrado)}/
              {contextOneCard.separador(objetive.cantidad)}
            </p>
          </div>
        </div>
      ) : (
        <div className="elseContainer">
          <h2 className="elseTitle">No hay objetivo</h2>
        </div>
      )}
    </>
  );
}

export default OneObjetiveCard;
