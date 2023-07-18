import React, { useContext, useState } from "react";
import benelli from "../images/benelli.jpg";
import { Context } from "../Context/Context";

function GraphicsCard() {
  const contextGraphics = useContext(Context);

  return (
    <div className="containerGraphicsMain">
      <div className="graphicsMain">
        <h2 className="titleGraphics">Dinero Total</h2>
        <div className="central">
          <div
            style={{
              "--porcentaje": contextGraphics.obtenerPorcentaje(
                contextGraphics.totalmoney,
                contextGraphics.saved
              ),
            }}
            className="porcentajeFondo"
          >
            <svg>
              <circle
                className="circle"
                r={"55"}
                cx={"50%"}
                cy={"50%"}
                pathLength={100}
              />
              <circle
                className="circle2"
                r={"55"}
                cx={"50%"}
                cy={"50%"}
                pathLength={100}
              />
            </svg>
            <p className="porcentaje">
              {contextGraphics.obtenerPorcentaje(
                contextGraphics.totalmoney,
                contextGraphics.saved
              )}
              %
            </p>
          </div>
        </div>
        <div className="infoContainer">
          <div className="info">
            <h6 className="overTittle">Completado</h6>
            <p className="overInfo">
              {contextGraphics.separador(contextGraphics.saved)}
            </p>
          </div>
          <div className="info2">
            <h6 className="overTittle">Total</h6>
            <p className="overInfo">
              {contextGraphics.separador(contextGraphics.totalmoney)}
            </p>
          </div>
        </div>
      </div>

      <div className="graphicsMain">
        <h2 className="titleGraphics">Todos los objetivos</h2>
        <div className="central">
          <div
            style={{
              "--porcentaje": contextGraphics.obtenerPorcentaje(
                contextGraphics.total,
                contextGraphics.completed
              ),
            }}
            className="porcentajeFondo"
          >
            <svg>
              <circle
                className="circle"
                r={"55"}
                cx={"50%"}
                cy={"50%"}
                pathLength={100}
              />
              <circle
                className="circle2"
                r={"55"}
                cx={"50%"}
                cy={"50%"}
                pathLength={100}
              />
            </svg>
            <p className="porcentaje">
              {contextGraphics.obtenerPorcentaje(
                contextGraphics.total,
                contextGraphics.completed
              )}
              %
            </p>
          </div>
        </div>
        <div className="infoContainer">
          <div className="info">
            <h6 className="overTittle">Completado</h6>
            <p className="overInfo">
              {contextGraphics.separador(contextGraphics.completed)}
            </p>
          </div>
          <div className="info2">
            <h6 className="overTittle">Total</h6>
            <p className="overInfo">
              {contextGraphics.separador(contextGraphics.total)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicsCard;
