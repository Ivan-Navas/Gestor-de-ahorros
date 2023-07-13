import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/modal.css";
import logoInput from "../images/add.png";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../Context/Context.jsx";
import { useForm } from "../Hooks/useForm.js";
import { Peticion } from "../helpers/Peticion.jsx";

const ModalEditCard = () => {
  const modalContextEdit = useContext(Context);

  return (
    <div>
      {modalContextEdit.modalEditState && (
        <Overlay>
          <div className="modalContainer edit">
            <button
              className="closeModalWindows"
              onClick={() => {
                modalContextEdit.setModalEditState(false);
              }}
            >
              <AiOutlineClose className="closeButton " />
            </button>
            <h2 className="tituloModal">Editar Objetivo</h2>
            <form className="form" onSubmit={modalContextEdit.editObjetive} autoComplete="off">
              <div className="inputsContainer">
                <div>
                  <label className="label">Nombre</label>
                  <input
                    name="nombre"
                    className="input"
                    type="text"
                    defaultValue={modalContextEdit.objetive.nombre}
                    onChange={modalContextEdit.cambiado}
                  />
                </div>
                <div>
                  <label className="label">Cantidad</label>
                  <input
                    name="cantidad"
                    className="input"
                    type="number"
                    defaultValue={modalContextEdit.objetive.cantidad}
                    onChange={modalContextEdit.cambiado}
                  />
                </div>
                <div>
                  <label className="label">Ahorrado</label>
                  <input
                    name="ahorrado"
                    className="input"
                    type="number"
                    defaultValue={modalContextEdit.objetive.ahorrado}
                    onChange={modalContextEdit.cambiado}
                  />
                </div>
                <div className="fileContainer">
                  <img className="logoInput" src={logoInput} alt="logoInput" />
                  <input className="fileEdit file" type="file" />
                </div>
                {/* {modalContextEdit.objetive.imagen !=
                  "https://res.cloudinary.com/ivannavas/image/upload/v1688963066/GestorDeAhorros/logo_xe6pbu.png" && (
                  <img
                    className="objetiveImageModal"
                    src={
                      "http://localhost:3900/api/imagen/" +
                      modalContextEdit.objetive.imagen
                    }
                    alt="logoImagen"
                  />
                )}
                {modalContextEdit.objetive.imagen ==
                  "https://res.cloudinary.com/ivannavas/image/upload/v1688963066/GestorDeAhorros/logo_xe6pbu.png" && (
                  <img
                    className="objetiveImageModal"
                    src={modalContextEdit.objetive.imagen}
                    alt="logoImagen"
                  />
                )} */}
              </div>
              <div className="buttonAddContainer">
                <input
                  type="submit"
                  value="Confirmar"
                  className="butttonAdd"
                />
              </div>
            </form>
          </div>
        </Overlay>
      )}
    </div>
  );
};

export default ModalEditCard;
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
