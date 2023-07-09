import React from "react";
import { useState, useEffect, useContext } from "react";
import benelli from "../images/benelli.jpg";
import "../styles/objetives.css";
import { Context } from "../Context/Context";

function ObjetivesCard() {
  const contextoCard = useContext(Context);

  useEffect(() => {
    contextoCard.conseguirObjetivos();
  }, []);

  return (
    <>
      {contextoCard.objetives.map((objetive) => {
        return (
          <div className="objetivesCardMain" key={objetive._id}>
            <div>
              <h6 className="porcentajeObjetivo">
                {contextoCard.obtenerPorcentaje(
                  objetive.cantidad,
                  objetive.ahorrado
                )}
                %
              </h6>
              <div className="circleContainer">
                <div
                  className="containerObjetive"
                  style={{
                    "--porcentaje": contextoCard.obtenerPorcentaje(
                      objetive.cantidad,
                      objetive.ahorrado
                    ),
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
                {contextoCard.separador(objetive.ahorrado)} /{" "}
                {contextoCard.separador(objetive.cantidad)}{" "}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ObjetivesCard;
