import React from "react";
import { useState, useEffect, useContext } from "react";
import "../styles/objetives.css";
import { Context } from "../Context/Context";
import { AiOutlineClose } from "react-icons/ai";

function ObjetivesCard() {
  const contextCard = useContext(Context);
  useEffect(() => {
    contextCard.conseguirObjetivos();
  }, []);
  console.log(contextCard.objetives)


  return (
    <>
      {contextCard.objetives.map((objetive) => {
        return (
          <div
            className="objetivesCardMain"
            key={objetive._id}
          >
            <button
              id="DeleteObjetive"
              className="deleteObjetiveState"
              onClick={() => {
                contextCard.deleteObjetive(objetive._id, contextCard.objetives);
              }}
            >
              <AiOutlineClose />
            </button>
            <div>
              <h6 className="porcentajeObjetivo">
                {contextCard.obtenerPorcentaje(
                  objetive.cantidad,
                  objetive.ahorrado
                )}
                %
              </h6>
              <div className="circleContainer">
                <div
                  className="containerObjetive"
                  style={{
                    "--porcentaje": contextCard.obtenerPorcentaje(
                      objetive.cantidad,
                      objetive.ahorrado
                    ),
                  }}
                >
                  <svg>
                    <circle
                      className="objetiveCircle"
                      r={"50"}
                      cx={"50%"}
                      cy={"50%"}
                      pathLength={100}
                    />
                    <circle
                      className="circle2"
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
                      src={
                        "http://localhost:3900/api/imagen/" + objetive.imagen
                      }
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
            <div className="infoObjetiveContainer">
              <h2 className="tittleObjetive">{objetive.nombre}</h2>
              <p className="infoObjetive">
                {contextCard.separador(objetive.ahorrado)} /{" "}
                {contextCard.separador(objetive.cantidad)}{" "}
              </p>
              <div className="buttonEditContainer">
                <button
                  className="buttonEdit"
                  onClick={() => {
                    contextCard.setModalEditState(!contextCard.modalEditState);
                    contextCard.getEdited(objetive._id, contextCard.objetives);
                  }}
                >
                  Editar
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ObjetivesCard;
