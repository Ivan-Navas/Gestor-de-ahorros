import React, { useContext, useState } from "react";
import "../styles/modal.css";
import logoInput from "../images/add.png";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../Context/Context.jsx";

function ModalAddObjetive() {
  const modalContext = useContext(Context);

  return (
    <>
      {modalContext.modalState && (
        <Overlay>
          <div className="modalContainer">
            <button
              className="closeModalWindows"
              onClick={() => {
                modalContext.setModalState(false);
              }}
            >
              <AiOutlineClose className="closeButton " />
            </button>
            <h2 className="tituloModal">Nuevo Objetivo</h2>
            <form className="form" onSubmit={modalContext.saveObjetive} autoComplete="off">
              <div className="inputsContainer">
                <input
                  name="nombre"
                  className="input"
                  type="text"
                  placeholder="Objetivo"
                  required="true"
                  onChange={modalContext.cambiado}
                />
                <input
                  name="cantidad"
                  className="input"
                  type="number"
                  placeholder="Cantidad"
                  required="true"
                  onChange={modalContext.cambiado}
                />
                <div className="fileContainer">
                  <img className="logoInput" src={logoInput} alt="logoInput" />
                  <input className="file" type="file" />
                </div>
              </div>
              <div className="buttonAddContainer">
                <input type="submit" value="Confirmar" className="butttonAdd" />
              </div>
            </form>
          </div>
        </Overlay>
      )}
    </>
  );
}
export default ModalAddObjetive;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  letf: 0;
  top: 0;
  display: grid;
  justify-content: center;
  align-items: center;
`;
