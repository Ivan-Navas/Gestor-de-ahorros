import React, { useContext } from "react";
import { Context } from "../Context/Context";
import benelli from '../images/benelli.jpg'
import "../styles/caroucel.css";

function OneObjetiveCard() {
  const contextOneCard = useContext(Context);


  const objetive =  contextOneCard.objetives[contextOneCard.objetives.length - 1];

  return (
    <>
      <div className="objetivesCardMainOne">{/*key={contextCaroucel.objetive._id}*/}
        <div>
          <h6 className="porcentajeObjetivoOne">
            {/* {contextCard.obtenerPorcentaje(
              objetive.cantidad,
              objetive.ahorrado
            )} */}
            %
          </h6>
          <div className="circleContainerOne">
            <div
              className="containerObjetiveOne"
              // style={{
              //   "--porcentaje": contextCard.obtenerPorcentaje(
              //     objetive.cantidad,
              //     objetive.ahorrado
              //   ),
              // }}
            >
              <svg>
                <circle
                  className="circleOneObjetive"
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
              {/* {objetive.imagen !=
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
              )} */}
              <img src={benelli} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="infoObjetiveContainer">
          <h2 className="tittleObjetive">{objetive.nombre}</h2>
          
          <p className="infoObjetive">
            {contextOneCard.separador(objetive.ahorrado)} /{" "}
            {contextOneCard.separador(objetive.cantidad)}{" "}
          </p>
          
        </div>
      </div>
    </>
  );
}

export default OneObjetiveCard;
